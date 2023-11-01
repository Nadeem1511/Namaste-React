import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        bio: "Dummy",
        avatar_url: "Dummy photo",
      },
    };
    //console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Nadeem1511");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, avatar_url, location, bio } = this.state.userInfo;

    //console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Decription : {bio}</h3>
      </div>
    );
  }
}

export default UserClass;
