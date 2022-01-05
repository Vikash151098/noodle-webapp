import React, { Component } from "react";
import { connect } from "react-redux";

class ContactModal extends Component {
  updateContactHandler = (e) => {
    e.preventDefault();
    console.log(this.props);
  };
  render() {
    return (
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactsData.contact,
  };
};

export default connect(mapStateToProps)(ContactModal);
