import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }

  componentDidMount() {}

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"First"} age={"22"} mail={"nadeem@gmail.com"} />
      </div>
    );
  }
}

export default About;
