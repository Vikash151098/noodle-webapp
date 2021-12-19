import React from "react";
import ContactForm from "../container/Contacts/ContactForm";
import ContactList from "../container/Contacts/ContactList";

function Contacts() {
  return (
    <div className="container">
      <h1>Contacts</h1>
      <div className="row">
        <div className="col-md-4">
          <ContactForm></ContactForm>
        </div>
        <div className="col-md-8">
          <ContactList></ContactList>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
