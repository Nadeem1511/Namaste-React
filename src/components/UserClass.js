import React from "react";

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

    return (
      <div className="flex flex-col items-center">
        <img className="w-[300px] h-[300px]" src={avatar_url} />
        <h2 className="text-3xl text-amber-700">{name}</h2>
        <h3 className="text-2xl text-amber-700">{location}</h3>
        <h3 className="text-xl text-amber-700">{bio}</h3>
      </div>
    );
  }
}

export default UserClass;
