import React from "react";
import { Link } from "react-router-dom";

function ContactList() {
  return (
    <div>
      <h2>Contact List</h2>
      <div className="list-group">
        <div className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              <Link to={`/contacts/1`}>John</Link>
            </h5>
            <small>Contact Id: 1</small>
          </div>
          <p className="mb-1">John is from NZ</p>
        </div>
      </div>
    </div>
  );
}

export default ContactList;
