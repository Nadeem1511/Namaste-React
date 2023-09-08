import React from "react";
import ReactDOM from "react-dom/client";

 const heading = React.createElement("h1",{id:"head"},"Hello, Nadeem all the best to complete Namaste-React");
 
 const HeadingComponent = () => (
  <div>  
    <h1 id="head">Hello, Nadeem all the best to complete Namaste React🚀</h1> 
  </div>  
 );  

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);

 const root2 = ReactDOM.createRoot(document.getElementById("root2"));
 root2.render(<HeadingComponent />);
 


 