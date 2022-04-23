import React from "react";

const Card = (props) => {
    const index = Math.round(Math.random() * 10)
    return (

        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <div className="card-header">
                    Brand
                    {/* <span className="badge badge-warning float-right">
                        {props.brand}
                    </span> */}
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{ cursor: "pointer" }} >{props.brand}</h5>
                    <img style={{
                        width: "100px",
                        height: "100px"
                    }} src={props.images && props.images[index > 7 ? index - 7 : index].Image}
                        alt={props.images && props.images[index > 7 ? index - 7 : index].Image} />
                </div>
                {/* <div className="card-footer text-muted">{props.top_ten}</div> */}
            </div>
        </div>
    );
};

export default Card;
