import logo from "./logo.svg";
import { Search as SearchIcon } from "react-feather";

const Hero = () => {
  const rootStyle = {
    width: "100%",
    display: "flex",
    position: "relative",
    height: "25em",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCC",
  };
  return (
    <div style={rootStyle}>
      <Container>
        <SearchInput />
      </Container>
    </div>
  );
};

const Container = (props) => {
  const { children, maxWidth } = props;
  const rootStyle = {
    maxWidth: "980px",
    width: "100%",
  };
  return <div style={rootStyle}>{children}</div>;
};

const SearchInput = () => {
  const rootStyle = {
    width: "80%",
    margin: "0 auto",
    height: "3em",
    backgroundColor: "#fff",
    border: "1px solid transparent",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
  };

  const searchIcon = {
    color: "#767676",
  };

  const inputStyle = {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    height: "100%",
    border: "none",
    outline: "none",
    fontSize: "20px",
    borderShadow: "none",
  };

  const inputContainerStyle = {
    flex: 1,
    position: "relative",
    width: "100%",
    display: "flex",
    paddingLeft: "16px",
    height: "3em",
  };

  return (
    <form style={rootStyle}>
      <div role="button">
        <SearchIcon style={searchIcon} />
      </div>
      <div style={inputContainerStyle}>
        <input
          type="search"
          autocomplete="off"
          style={inputStyle}
          arialAutoComplete="search"
          placeholder="Search for photo"
        />
      </div>
    </form>
  );
};

const ImageThumbnail = () => {
  return null;
};

const Modal = () => {};

function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;
