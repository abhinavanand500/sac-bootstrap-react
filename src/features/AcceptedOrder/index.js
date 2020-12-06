import React from "react";
import Card from "../components/Card";
const AcceptedOrder = () => {
    return (
        <div>
            <div className='container mt-5'>
                <h3>Orders you have accepted</h3>
                <hr />
                <br />
                <Card
                    acceptedBy='Abhinav'
                    address='NHCE, Bangalore'
                    contact='8095509320'
                    acceptedAt='9:00am'
                    type='Clothes'
                    accept
                    user
                />
                <br />
                <hr />
                <br />
            </div>
        </div>
    );
};

export default AcceptedOrder;
