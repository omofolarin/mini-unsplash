import * as React from "react";
import Container from "../container";
import ImageThumbnail from "../image-thumbnail";
import useWindowSize from "../../hooks/use-window-resize";
import "./image-grid.css";

const ImageGrid = (props) => {
  const { data, isFetching } = props;
  const [readyToRender, setReadyToRender] = React.useState(false);
  const gridRef = React.useRef(null);
  const size = useWindowSize();
  let dataList = !isFetching && Array.isArray(data) ? data : Array(6).fill({});

  React.useLayoutEffect(() => {
    function resizeGridItem(item) {
      let grid = gridRef.current;
      let rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
      let rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );

      let rowSpan = Math.ceil(
        (item.querySelector(".content").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
    }

    function resizeAllGridItems() {
      const allItems = gridRef.current.getElementsByClassName("item");
      for (let x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
      }
    }

    setTimeout(() => {
      resizeAllGridItems();
      setReadyToRender(true);
    }, 500);
  }, [gridRef, isFetching, setReadyToRender, size]);

  return (
    // <Animate
    //   play={readyToRender}
    //   start={{ opacity: 0, filter: "blur(10px)" }}
    //   end={{ opacity: 1, filter: "blur(0)" }}
    //   duration={0.5}
    // >
    <div className="imageGrid__centralize imageGrid__root">
      <Container maxWidth="900px">
        <div className="grid" ref={gridRef}>
          {dataList.map((item, j) => {
            return (
              <ImageThumbnail
                key={j.toString()}
                data={item}
                isFetching={isFetching}
                display={readyToRender}
              />
            );
          })}
        </div>
        {dataList.length === 0 && (
          <div style={{ width: "100%" }}>
            <h1 style={{ fontWeight: 200, textAlign: "center" }}>
              No results found
            </h1>
          </div>
        )}
      </Container>
    </div>
    // </Animate>
  );
};

export default ImageGrid;
