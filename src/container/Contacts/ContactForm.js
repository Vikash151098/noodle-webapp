import React, { Component } from "react";
import { connect } from "react-redux";
import { createContact } from "../../services/contactService";

class ContactForm extends Component {
  addContactHandler = (e) => {
    e.preventDefault();

    const contactFormData = {
      name: this.getName.value,
      email: this.getEmail.value,
      phone: this.getPhone.value,
    };
    this.props.dispatch(createContact(contactFormData));
  };
  render() {
    return (
      <div>
        <div className="container text-left">
          <div className="row">
            <div className="col-md-12">
              <h3>Create Contact!</h3>
              <form onSubmit={this.addContactHandler}>
                <input
                  required
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                  defaultValue="vikash"
                  ref={(s) => (this.getName = s)}
                />
                <br />
                <input
                  required
                  type="text"
                  placeholder="Enter EMail"
                  className="form-control"
                  defaultValue="test@test.com"
                  ref={(s) => (this.getEmail = s)}
                />
                <br />

                <input
                  required
                  type="text"
                  placeholder="Enter Phone"
                  className="form-control"
                  defaultValue="12345678"
                  ref={(s) => (this.getPhone = s)}
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

export default connect()(ContactForm);
