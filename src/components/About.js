// import HeaderComp from "./HeaderComp";
import UserClass from "./UserClass";
import React from "react";
// import UserFunction from "./UserFunction";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About Constructor");
  }

  componentDidMount() {
    console.log("About did mount");
  }
  render() {
    console.log("Render About");
    return (
      <div>
        {/* <HeaderComp /> */}
        <h1>About</h1>
        <h2>Namaste React</h2>
        {/* <UserClass name={"Aishwarya Byali"} location="Bangalore" /> */}
        <UserClass name={"Aishwarya"} location="Mumbai" />
        {/* <UserFunction /> */}
        <div>
          LoggedInUser:
          <UserContext.Consumer>
            {(loggedInUser) => console.log("data", loggedInUser)}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
