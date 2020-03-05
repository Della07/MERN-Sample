import React, { Component } from "react";

class usersForm extends Component {
  render() {
    const { state, handleChange, putDataToDB } = this.props;
    return (
      <div className="container pt-5">
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstname"
                value={state.firstname}
                onChange={e => handleChange("firstname", e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastname"
                value={state.lastname}
                onChange={e => handleChange("lastname", e.target.value)}
              />
            </div>
            <div className="col">
              <button
                className="btn btn-success"
                onClick={() => putDataToDB(state.firstname, state.lastname)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default usersForm;
