import * as React from "react";
import "./image-thumbnail.css";

const ImageThumbnail = ({ isFetching, data, display }) => {
  return (
    <>
      {isFetching && (
        <div className="item">
          <div className="content">
            <div
              style={{
                width: "100%",
                height: "22em",
                backgroundColor: "#eee",
              }}
            ></div>
          </div>
        </div>
      )}

      {!isFetching && (
        <div className="item">
          <div className="content">
            <img
              src={data?.urls?.regular}
              alt="thumbnail"
              style={{ width: "100%" }}
            />
            <div className="imageThumbnail__outer">
              <div className="imageThumbnail__overlay">
                <p className={"imageThumbnail__primary-text"}>
                  {data?.user?.name}
                </p>
                <p className={"imageThumbnail__secondary-text"}>
                  {data?.user?.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageThumbnail;
