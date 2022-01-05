import React, { Component } from "react";
import { connect } from "react-redux";
import Contact from "../../components/Contact/Contact";
import { getAllContact } from "../../services/contactService";

class ContactList extends Component {
  componentDidMount() {
    this.props.dispatch(getAllContact());
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h2>Contact List</h2>
        <div className="list-group">
          {this.props.vikash && this.props.vikash.length > 0 ? (
            this.props.vikash.map(({ id, name, email }, i) => {
              return <Contact key={i} id={id} name={name} email={email} />;
            })
          ) : (
            <div className="alert alert-danger">
              Contact Not Found. You can Add one!
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vikash: state.contactsData.contacts,
  };
};

export default connect(mapStateToProps)(ContactList);
