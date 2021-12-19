import React, { Component } from "react";

class ContactDetails extends Component {
  render() {
    return (
      <div className="container text-left">
        <h1>Contact Details</h1>
        <div>
          <div className="list-group">
            <div className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">John</h5>
                <small>Contact Id: 1</small>
              </div>
              <p className="mb-1">John is from NZ</p>
              <br />
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#editModal"
              >
                Edit
              </button>{" "}
              &nbsp;
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="editModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Contact
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <input
                    required
                    type="text"
                    placeholder="Enter Name"
                    className="form-control"
                  />
                  <br />
                  <input
                    required
                    type="text"
                    placeholder="Enter E-Mail"
                    className="form-control"
                  />
                  <br />
                  <input
                    required
                    type="text"
                    placeholder="Enter Phone"
                    className="form-control"
                  />
                  <br />
                  <button className="btn btn-primary" type="submit">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
