import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
const Notification = () => {
    return (
        <>
            <div class='container mt-5'>
                <h3>NOTIFICATION</h3>
                <hr />
                <h4>Your Accepted Orders</h4>
                <br />
                <Card
                    acceptedBy='Abhinav'
                    address='NHCE, Bangalore'
                    contact='8095509320'
                    acceptedAt='9:00am'
                    type='Clothes'
                ><Button/></Card>
                <Card
                    acceptedBy='Abhinav'
                    address='NHCE, Bangalore'
                    contact='8095509320'
                    acceptedAt='9:00am'
                    type='Clothes'
                />
                <Card
                    acceptedBy='Abhinav'
                    address='NHCE, Bangalore'
                    contact='8095509320'
                    acceptedAt='9:00am'
                    type='Clothes'
                />
                <Card
                    acceptedBy='Abhinav'
                    address='NHCE, Bangalore'
                    contact='8095509320'
                    acceptedAt='9:00am'
                    type='Clothes'
                />
                <br />
                <hr />
                <br />
            </div>
        </>
    );
};

export default Notification;
