import React from "react";
import "./style.css";
const Jumbotron = () => {
    return (
        <div className='jumbotron my-3'>
            <h1 className='display-4'>Welcome to Sac.</h1>
            <p>Would you like to talk to our chatBot to know more about us?</p>
            <a
                className='btn btn-dark btn-lg my-2'
                href='https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=2f56951f-120f-4309-92a2-dcdd4580ab57&serviceInstanceID=aee528ff-74f7-4657-b398-d01bb7a36378'
                role='button'>
                Chat With Our Assistant
            </a>
            <hr className='my-4' />
            <p className='lead'>
                Donate, because your Extra can be someone’s Need.
            </p>
            <p>What do you want to donate ?</p>
            <a
                className='btn btn-dark btn-lg mr-2'
                href='/donateFood'
                role='button'>
                Donate Food
            </a>
            <a
                className='btn btn-dark btn-lg ml-2'
                href='/donateCloth'
                role='button'>
                Donate Cloths
            </a>
            <a
                className='btn btn-dark btn-lg ml-2'
                href='/donateOther'
                role='button'>
                Donate Other Necessities
            </a>
            <a
                className='btn btn-dark btn-lg ml-2'
                href='https://www.pmcares.gov.in/en/'
                role='button'>
                Donate Money at PM care fund
            </a>
            <br />
            <br />
            <p>
                If you Want to open Donation Camp, Signup and send your proof
                through Contact Form
            </p>
        </div>
    );
};

export default Jumbotron;
