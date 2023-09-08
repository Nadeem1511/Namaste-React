import React from "react";
import ReactDOM from "react-dom/client";

 const Title = () => (
    <div>
        <h1>Hello, Nadeem all the best to complete Namaste-React</h1>
    </div>
 );
 
 const HeadingComponent = () => (
  <div>  
    <h1 id="head">Hello, Nadeem all the best to complete Namaste React🚀</h1>
    <Title /> 
  </div>  
 );  

//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(<Title />);

 const root2 = ReactDOM.createRoot(document.getElementById("root2"));
 root2.render(<HeadingComponent />);
 


 