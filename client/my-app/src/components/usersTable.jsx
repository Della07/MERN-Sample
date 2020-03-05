import React, { Component } from "react";

class usersTable extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="container p-3">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default usersTable;
