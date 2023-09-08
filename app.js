import React from "react";
import ReactDOM from "react-dom/client";

 const parent = React.createElement(
    "div", 
    {id: "parent"},
    React.createElement("div", {id: "child"}, [
    React.createElement("h2", {},"Hello, I am a H2 tag!!"),
    React.createElement("h3", {}, "Hello, I am a H3 tag!!")
    ]),
    React.createElement("div", {id: "child"}, [
        React.createElement("h2", {},"Hello, I am a H2 tag!!"),
        React.createElement("h3", {}, "Hello, I am a H3 tag!!")
        ])
 );

 console.log(parent);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);