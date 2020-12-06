import React from "react";
import Button from "./Button";
const Card = (props) => {
    return (
        <div className='mt-4 mb-4'>
            <div class='card'>
                <div class='card-header'>
                    <div class='row'>
                        <div class='col-md-10 col-sm-12'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <h4>
                                        {props.user
                                            ? "Donated By "
                                            : "Accepted By"}{" "}
                                    </h4>
                                    <h4>Address</h4>
                                    <h4>Contact</h4>
                                    <h4>
                                        {props.requested
                                            ? "Requested At"
                                            : "Accepted At "}{" "}
                                    </h4>
                                </div>
                                <div className='col-md-7'>
                                    <h4>:: {props.acceptedBy}</h4>
                                    <h4>:: {props.address}</h4>
                                    <h4>:: {props.contact}</h4>
                                    <h4>:: {props.acceptedAt}</h4>
                                </div>
                            </div>
                        </div>
                        {props.user && props.accept ? (
                            <div className='col-md-2 col-sm-12 '>
                                <Button
                                    style={{ value: "btn btn-success" }}
                                    title='Accept'
                                />
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div class='card-body'>
                    <h5 class='card-title'>
                        {props.requested ? (
                            <div>
                                <span style={{ color: "tomato" }}>
                                    other.user
                                </span>{" "}
                                wants to donate{" "}
                                <span style={{ color: "chocolate" }}>
                                    {" "}
                                    "items"
                                </span>
                            </div>
                        ) : props.accept ? (
                            <h5 class='card-title'>
                                You accepted{" "}
                                <span style={{ color: "tomato" }}>
                                    noti.endusers
                                </span>{" "}
                                donation of noti.type1
                            </h5>
                        ) : (
                            <div>
                                <span style={{ color: "tomato" }}>
                                    {props.acceptedBy}
                                </span>{" "}
                                accepted your request to donate {props.type}
                            </div>
                        )}
                    </h5>
                    <hr />
                    <h5 style={{ color: "darkcyan" }}>Description - </h5>
                    <p class='card-text'>noti.description</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
