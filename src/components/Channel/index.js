import React from "react";

const Channel = (props) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          {/* <img className="card-img-top" alt="..." /> */}
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.info}</p>
          <button type="button" className="btn btn-primary float-right">
            Add to Fav
          </button>
        </div>
      </div>
    </div>
  );
};

export default Channel;
