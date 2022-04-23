import React from "react";
import { useHistory } from "react-router-dom";

const Brand = (props) => {
  const history = useHistory();
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <div className="card-header">
          Brand
          <span className="badge badge-warning float-right">
            {props.brand}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ cursor: "pointer" }} onClick={() => history.push(`/${props.country}`)}>{props.country}</h5>
          <p className="card-text">Rating: {props.stars}</p>
          <p className="card-text">{props.styles}</p>
          <p className="card-text">{props.variety}</p>

        </div>
        <div className="card-footer text-muted">{props.top_ten}</div>
      </div>
    </div>
  );
};

export default Brand;
