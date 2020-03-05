import React from "react";
import UsersForm from "./components/usersForm";
import UsersTable from "./components/usersTable";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    id: 0,
    firstname: "",
    lastname: ""
  };

  handleChange = (key, value) => {
    console.log(key, value);
    this.setState({ [key]: value });
  };

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ users: res.data }));
  };

  putDataToDB = (fname, lname) => {
    let currentIds = this.state.users.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/api/putData", {
      id: idToBeAdded,
      firstname: fname,
      lastname: lname
    });
  };

  render() {
    return (
      <div>
        <UsersForm
          state={this.state}
          handleChange={this.handleChange}
          putDataToDB={this.putDataToDB}
        />
        <UsersTable users={this.state.users} />
      </div>
    );
  }
}

export default App;
