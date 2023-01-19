import React from "react";
import "./BlogEntry.css";

const BlogEntry = (props) => {
  return (
    <div className={`entry ${props.imagePosition}`}>
      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <div className="imageContainer">
        <img src={props.imgUrl}></img>
      </div>
    </div>
  );
};

export default BlogEntry;
