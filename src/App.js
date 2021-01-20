import logo from "./logo.svg";
import * as React from "react";
import { Search as SearchIcon } from "react-feather";
import useStore from "./store";
import Hero from "./components/hero";
import ImageGrid from "./components/image-grid";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Animate } from "react-simple-animate";
import Modal from "./components/modal";

import "./index.css";

// const styles = {
//   centralize: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// };
// const { assign } = Object;

// const Hero = () => {
//   const history = useHistory();
//   const rootStyle = assign(
//     {
//       width: "100%",
//       position: "relative",
//       height: "25em",
//       backgroundColor: "#CCC",
//     },
//     styles.centralize
//   );
//   const pathname = history.location.pathname;
//   return (
//     <div style={rootStyle}>
//       <Container>
//         {pathname === "/" && <SearchInput />}
//         {pathname !== "/" && (
//           <h1>Search Results for "{pathname.substring(1)}"</h1>
//         )}
//       </Container>
//     </div>
//   );
// };

// const Container = (props) => {
//   const { children, maxWidth } = props;
//   const rootStyle = {
//     maxWidth: maxWidth ?? "980px",
//     width: "100%",
//   };
//   return <div style={rootStyle}>{children}</div>;
// };

// const SearchInput = () => {
//   const { searchValue, onChange, onSearch } = useStore();
//   const rootStyle = {
//     width: "80%",
//     margin: "0 auto",
//     height: "3em",
//     backgroundColor: "#fff",
//     border: "1px solid transparent",
//     borderRadius: "5px",
//     display: "flex",
//     alignItems: "center",
//     padding: "0 16px",
//   };

//   const searchIcon = {
//     color: "#767676",
//   };

//   const inputStyle = {
//     width: "100%",
//     flexGrow: 1,
//     display: "flex",
//     height: "100%",
//     border: "none",
//     outline: "none",
//     fontSize: "20px",
//     borderShadow: "none",
//   };

//   const inputContainerStyle = {
//     flex: 1,
//     position: "relative",
//     width: "100%",
//     display: "flex",
//     paddingLeft: "16px",
//     height: "3em",
//   };

//   const searchButtonStyle = {
//     cursor: "pointer",
//   };

//   return (
//     <form style={rootStyle} onSubmit={onSearch}>
//       <div role="button" style={searchButtonStyle} onClick={onSearch}>
//         <SearchIcon style={searchIcon} />
//       </div>
//       <div style={inputContainerStyle}>
//         <input
//           type="search"
//           autoComplete="off"
//           style={inputStyle}
//           placeholder="Search for photo"
//           value={searchValue}
//           onChange={onChange}
//         />
//       </div>
//     </form>
//   );
// };

// const ImageGrid = (props) => {
//   const { data = Array(6).fill({}), isFetching } = props;
//   const [readyToRender, setReadyToRender] = React.useState(false);
//   const gridRef = React.useRef(null);
//   const rootStyle = assign(
//     {
//       width: "80%",
//       margin: "0 auto",
//       height: "auto",
//       position: "relative",
//       top: "-5em",
//       zIndex: 2,
//     },

//     styles.centralize
//   );

//   React.useLayoutEffect(() => {
//     function resizeGridItem(item) {
//       // let grid = document.getElementsByClassName("grid")[0];
//       let grid = gridRef.current;
//       let rowHeight = parseInt(
//         window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
//       );
//       let rowGap = parseInt(
//         window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
//       );

//       let rowSpan = Math.ceil(
//         (item.querySelector(".content").getBoundingClientRect().height +
//           rowGap) /
//           (rowHeight + rowGap)
//       );
//       item.style.gridRowEnd = "span " + rowSpan;
//     }

//     function resizeAllGridItems() {
//       const allItems = gridRef.current.getElementsByClassName("item");
//       for (let x = 0; x < allItems.length; x++) {
//         resizeGridItem(allItems[x]);
//       }
//     }

//     setTimeout(() => {
//       resizeAllGridItems();
//       setReadyToRender(true);
//     }, 300);
//   }, [gridRef, isFetching, setReadyToRender]);

//   return (
//     // <Animate
//     //   play={readyToRender}
//     //   start={{ opacity: 0, filter: "blur(10px)" }}
//     //   end={{ opacity: 1, filter: "blur(0)" }}
//     //   duration={0.5}
//     // >
//     <div style={rootStyle}>
//       <Container maxWidth="900px">
//         <div className="grid" ref={gridRef}>
//           {data.map((item, j) => {
//             return (
//               <ImageThumbnail
//                 key={j.toString()}
//                 data={item}
//                 isFetching={isFetching}
//                 display={readyToRender}
//               />
//             );
//           })}
//         </div>
//       </Container>
//     </div>
//     // </Animate>
//   );
// };

// const ImageThumbnail = ({ isFetching, data, display }) => {
//   return (
//     <>
//       {isFetching && (
//         <div className="item">
//           <div className="content">
//             <div
//               style={{
//                 width: "100%",
//                 height: "22em",
//                 backgroundColor: "#eee",
//               }}
//             ></div>
//           </div>
//         </div>
//       )}

//       {!isFetching && (
//         <div
//           className="item"
//           style={{ opacity: 1, transition: "all 5s", transitionDelay: "10s" }}
//         >
//           <div className="content">
//             <img
//               src={data?.urls?.regular}
//               alt="thumbnail"
//               style={{ width: "100%" }}
//             />
//             <div
//               style={{
//                 position: "sticky",
//                 width: "100%",
//                 zIndex: 1,
//                 top: "100%",
//                 // marginBottom: "-5em",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   backgroundColor: "rgba(255, 255, 255, 0.5)",
//                   backgroundImage:
//                     "linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9))",
//                   display: "flex",
//                   width: "97.5%",
//                   flexDirection: "column",
//                   height: "auto",
//                   top: "-7em",
//                   padding: "8px 4px",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontSize: "18px",
//                     color: "#fff",
//                     paddingLeft: "8px",
//                   }}
//                 >
//                   {data?.user?.name}
//                 </p>
//                 <p
//                   style={{
//                     padding: "0 4px 0 8px",
//                     fontSize: "16px",
//                     color: "#fff",
//                   }}
//                 >
//                   {data?.user?.location}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const Modal = () => {};

const reactQueryClient = new QueryClient();

function App() {
  const { resource, isFetching } = useStore();

  return (
    <div>
      {/* <Modal /> */}
      <Hero />
      <ImageGrid data={resource} isFetching={isFetching} />
    </div>
  );
}

function Root() {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <Router>
        <Route exact path="/">
          <App />
        </Route>

        <Route exact path="/:search">
          <App />
        </Route>
      </Router>
    </QueryClientProvider>
  );
}

export default Root;
