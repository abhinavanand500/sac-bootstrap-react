import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const JumbotronHome = () => {
    return (
        <div>
            <div class='jumbotron my-3'>
                <h1 class='display-4'>Welcome to Sac.</h1>
                <p>
                    Would you like to talk to our chatBot to know more about us?
                </p>
                <Button
                    style={{ value: "btn-dark btn-lg my-2" }}
                    title='Chat With Our Assistant'
                    href='https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=2f56951f-120f-4309-92a2-dcdd4580ab57&serviceInstanceID=aee528ff-74f7-4657-b398-d01bb7a36378'
                />

                <hr class='my-4' />
                <p class='lead'>
                    Donate, because your Extra can be someone’s Need.
                </p>
                <p>What do you want to donate ?</p>

                <div>
                    <Link to='/'>
                        <Button
                            style={{ value: "btn-dark btn-lg my-2 inner" }}
                            title='Donate Foods'
                            href='/'
                        />
                    </Link>
                    <Link to='/'>
                        <Button
                            style={{ value: "btn-dark btn-lg my-2 inner" }}
                            title='Donate Cloths'
                            href='/'
                        />
                    </Link>
                    <Link to='/'>
                        <Button
                            style={{ value: "btn-dark btn-lg my-2 inner" }}
                            title='Donate Other Necessities'
                            href='/'
                        />
                    </Link>
                    <a href='https://www.pmcares.gov.in/en/'>
                        <Button
                            style={{ value: "btn-dark btn-lg my-2" }}
                            title='Donate Money at PM care fund'
                            href='/'
                        />
                    </a>
                </div>
                <br />
                <p>
                    If you Want to open Donation Camp, Signup and send your
                    proof through Contact Form
                </p>
            </div>
        </div>
    );
};

export default JumbotronHome;
