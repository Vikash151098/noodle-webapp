import React, { Component } from "react";
import { connect } from "react-redux";
import { getContactDetailByID } from "../../services/contactService";
import ContactModal from "./ContactModal";

class ContactDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getContactDetailByID(id));
  }

  componentDidUpdate() {}

  openEditContactHandler = (data) => {
    this.editContactData = data;
  };

  render() {
    console.log(this.editContactData);
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
                onClick={this.openEditContactHandler.bind(
                  this,
                  this.props.contact
                )}
              >
                Edit
              </button>{" "}
              &nbsp;
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
        <ContactModal />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactsData.contact,
  };
};

export default connect(mapStateToProps)(ContactDetails);
