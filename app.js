import React from "react";
import ReactDOM from "react-dom/client";

 const Title = () => (
    <div>
        <h1>Hello, Nadeem all the best to complete Namaste-React</h1>
    </div>
 );

 const HeadingComponent = () => (
  <div> 
     <Title />
     <Title></Title>
     {Title()}
    <h1 id="head">Hello, Nadeem all the best to complete Namaste React🚀</h1>
  </div>  
 );  

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComponent />);

 const root2 = ReactDOM.createRoot(document.getElementById("root2"));
 root2.render(<HeadingComponent />);
 


 