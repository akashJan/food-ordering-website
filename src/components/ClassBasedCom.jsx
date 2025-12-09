import UserClass from "./UserClass";
import React, { Component } from "react";

class ClassBasedCom extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    // Do API calls here
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This Page is Class Component</p>
        <UserClass name="Akash Class Child 1" location={"India"} />
        {/* <ProfileClass name="Akash Class Child 2" loaction={"India"} /> */}
      </div>
    );
  }
}

export default ClassBasedCom;
