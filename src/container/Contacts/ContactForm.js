import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className="container text-left">
          <div className="row">
            <div className="col-md-12">
              <h3>Create Contact!</h3>
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
                  placeholder="Enter EMail"
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
                  Add Contact
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
