import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    // Api Calls
    //  It Call after Render only single time
    console.log("Child componentDidMount");

    const data = await fetch("https://api.github.com/users/akashJan");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location } = this.state.userInfo;
    const { count } = this.state;
    console.log("Child Render");
    return (
      <div>
        <h1>This is Class based component</h1>
        <h1>Count:{count}</h1>
        <button
          className="m-4 p-5 py-2 rounded-lg font-semibold text-white transition shadow-sm cursor-pointer border-none  bg-rose-500"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
