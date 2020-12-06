import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const Dashboard = () => {
    return (
        <div>
            <div className='container mt-5'>
                <h3>DONATION CAMP DASHBOARD</h3>
                <div className='col-md-4 col-sm-12 '>
                    <Link
                        to='/acceptedOrder'
                        className='btn btn-success mx-1 my-1'>
                        Orders you have accepted
                    </Link>
                </div>
                <hr />
                <h4>Clothes Details</h4>
                <br />
                <Card
                    user
                    requested
                    acceptedBy='Abhinav'
                    address='NHCE, Bangalore'
                    contact='8095509320'
                    acceptedAt='9:00am'
                    accept
                    button_accept
                    type='Clothes'></Card>
                <br />
                <hr />
                <br />
                <h4>Food Details</h4>
                <br />
                <Card
                    user
                    requested
                    acceptedBy='Abhinav'
                    address='NHCE, Bangalore'
                    contact='8095509320'
                    acceptedAt='9:00am'
                    accept
                    button_accept
                    type='Clothes'></Card>
                <br />
                <hr />
                <br />
                <h4>Other Details</h4>
                <br />
                <Card
                    user
                    requested
                    acceptedBy='Abhinav'
                    address='NHCE, Bangalore'
                    contact='8095509320'
                    acceptedAt='9:00am'
                    accept
                    button_accept
                    type='Clothes'></Card>
            </div>
        </div>
    );
};

export default Dashboard;
