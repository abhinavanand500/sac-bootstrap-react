import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const JumbotronHome = () => (
    <div>
        <div className="jumbotron my-3">
            <h1 className="display-4">Welcome to Sac.</h1>
            <p>Would you like to talk to our chatBot to know more about us?</p>
            <Button
                style={{ value: 'btn-dark btn-lg my-2' }}
                title="Chat With Our Assistant"
                href="https://web-chat.global.assistant.watson.cloud.ibm.com/
                preview.html?region=eu-gb&integrationID=2f56951f-120f-4309-92a2-dcdd45
                80ab57&serviceInstanceID=aee528ff-74f7-4657-b398-d01bb7a36378"
            />

            <hr className="my-4" />
            <p className="lead">Donate, because your Extra can be someone’s Need.</p>
            <p>What do you want to donate ?</p>

            <div className="row">
                <Link to="/donateFood">
                    <Button style={{ value: 'btn-dark btn-lg my-2 inner' }} title="Donate Foods" />
                </Link>
                <Link to="/donateClothes">
                    <Button style={{ value: 'btn-dark btn-lg my-2 inner' }} title="Donate Cloths" />
                </Link>
                <Link to="/donateOthers">
                    <Button
                        style={{ value: 'btn-dark btn-lg my-2 inner' }}
                        title="Donate Other Necessities"
                    />
                </Link>
                <a href="https://www.pmcares.gov.in/en/">
                    <Button
                        style={{ value: 'btn-dark btn-lg my-2' }}
                        title="Donate Money at PM care fund"
                        href="/"
                    />
                </a>
            </div>
            <br />
            <p>
                If you Want to open Donation Camp, Signup and send your proof through Contact Form
            </p>
        </div>
    </div>
);
export default JumbotronHome;
