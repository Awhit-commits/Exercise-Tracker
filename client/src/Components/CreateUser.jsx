import React, { Component } from "react";
import axios from "axios";
export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  //Method for adding a new user
  onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log(user);
    this.setState({ username: "" });

    let response = await fetch(`/users/add`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let json = await response.json();
    console.log(json);
  };
  render() {
    return (
      <div>
        <h1>Create A New User</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="">Username:</label>
            <input
              type="text"
              required
              className="form-control"
              name=""
              id=""
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              className="btn btn-primary"
              type="submit"
              value="Create a New User"
            />
          </div>
        </form>
      </div>
    );
  }
}
