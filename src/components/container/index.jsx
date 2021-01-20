import * as React from "react";

const Container = (props) => {
  const { children, maxWidth } = props;
  const rootStyle = {
    maxWidth: maxWidth ?? "980px",
    width: "100%",
  };
  return <div style={rootStyle}>{children}</div>;
};

export default Container;
