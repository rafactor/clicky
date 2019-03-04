import React from "react";

export default function Wrapper(props) {
    return <div className="wrapper d-flex flex-wrap justify-content-around">{props.children}</div>;
  }