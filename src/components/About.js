import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1 className="text-center text-4xl mt-5 mb-5 text-amber-700">
          About Us
        </h1>
        <UserClass name={"First"} age={"22"} mail={"nadeem@gmail.com"} />
      </div>
    );
  }
}

export default About;
