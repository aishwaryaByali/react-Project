import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("     User constructor", this.props.name);
  }
  componentDidMount() {
    // console.log("     User did mount", this.props.name);
    // const data = await fetch("https://api.github.com/users/aishwarya");
    // const json = await data.json();
    // console.log(json);
    this.timer = setInterval(() => {
      console.log(" user class call after every sec");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("unmount");
  }
  render() {
    console.log("     User Render", this.props.name);
    return (
      <div className="user-comp">
        <h2>Name : {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
