import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteContactByID,
  getContactDetailByID,
  updateContactDetailByID,
} from "../../services/contactService";

class ContactDetails extends Component {
  componentDidMount() {
    this.props.onGetContact(this.props.match.params.id);
  }

  componentDidUpdate() {}

  updateContactHandler = (e) => {
    e.preventDefault();
    const updatedContact = {
      name: this.getName.value,
      email: this.getEmail.value,
      phone: this.getPhone.value,
    };
    this.props.onUpdateContact(this.props.match.params.id, updatedContact);
  };

  deleteHandler = () => {
    this.props.onDeleteContact(this.props.match.params.id);
  };

  render() {
    return (
      <div className="container text-left">
        <h1>Contact Details</h1>
        <div>
          <div className="list-group">
            <div className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{this.props.contact.name}</h5>
                <small>Contact Id: {this.props.contact.id}</small>
              </div>
              <p className="mb-1">
                Email:{this.props.contact.email} Phone:
                {this.props.contact.phone}
              </p>
              <br />
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#editModal"
              >
                Edit
              </button>{" "}
              &nbsp;
              <button className="btn btn-danger" onClick={this.deleteHandler}>
                Delete
              </button>
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
                <form onSubmit={this.updateContactHandler}>
                  <input
                    required
                    type="text"
                    placeholder="Enter Name"
                    className="form-control"
                    defaultValue={this.props.contact.name}
                    ref={(s) => (this.getName = s)}
                  />
                  <br />
                  <input
                    required
                    type="text"
                    placeholder="Enter E-Mail"
                    className="form-control"
                    defaultValue={this.props.contact.email}
                    ref={(s) => (this.getEmail = s)}
                  />
                  <br />
                  <input
                    required
                    type="text"
                    placeholder="Enter Phone"
                    className="form-control"
                    defaultValue={this.props.contact.phone}
                    ref={(s) => (this.getPhone = s)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onGetContact: (id) => {
      dispatch(getContactDetailByID(id));
    },
    onUpdateContact: (id, updatedContact) => {
      dispatch(updateContactDetailByID(id, updatedContact));
    },
    onDeleteContact: (id) => {
      dispatch(deleteContactByID(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    contact: state.contactsData.contact,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
