import axios from "axios";
import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    console.log("========Inside Constructor===========");

    this.state = {
      personName: "Vikash",
      accountCreation: "17/12/21",
    };
  }

  componentDidMount() {
    // ideal place for ajax request
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    console.log("========Inside ComponentDidMount===========");
  }

  profileChangeHandler = (e) => {
    this.setState({
      personName: e.target.value,
    });
  };

  render() {
    console.log("========Inside Rendered===========");
    return (
      <div>
        <p>{this.state.personName}</p>
        <input
          type="text"
          value={this.state.personName}
          onChange={this.profileChangeHandler}
        />
      </div>
    );
  }
}

export default Profile;
