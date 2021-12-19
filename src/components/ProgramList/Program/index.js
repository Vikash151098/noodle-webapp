/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Program = (props) => {
  // props -- are read-only objects
  console.log(props);

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">
          Featured
          <span className="badge badge-warning float-right">
            {props.category}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.children}</p>
          <a href="#" className="btn btn-primary">
            Watch it
          </a>
        </div>
        <div className="card-footer text-muted">{props.time}</div>
      </div>
    </div>
  );
};

export default Program;
