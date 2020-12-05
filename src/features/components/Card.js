import React from "react";

const Card = (props) => {
    return (
        <div className='mt-4 mb-4'>
            <div class='card'>
                <div class='card-header'>
                    <div class='row'>
                        <div class='col-md-8 col-sm-12'>
                            <h4>
                                <pre>
                                    {props.user ? "Donated By " : "Accepted By"}   :: {props.acceptedBy}
                                </pre>
                            </h4>
                            <h4>
                                <pre>Address       :: {props.address}</pre>
                            </h4>
                            <h4>
                                <pre>Contact       :: {props.contact}</pre>
                            </h4>
                            <h4>
                                <pre>{props.requested ? "Requested At" : "Accepted At "}  :: {props.acceptedAt}</pre>
                            </h4>
                        </div>
                        {props.user?
                        <div className="col-md-4 col-sm-12 ">
                            {props.children}
                        </div>:""}
                    </div>
                </div>
                <div class='card-body'>
                    <h5 class='card-title'>
                    {props.requested?<div><span style={{color: "tomato"}}>other.user</span> wants to donate <span style={{color: "chocolate"}}> "items"</span></div>:<div><span style={{ color: "tomato" }}>{props.acceptedBy}</span> accepted your request to donate {props.type}</div>}
                        
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
