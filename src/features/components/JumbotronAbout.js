/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const JumbotronAbout = () => (
    <div>
        <div className="jumbotron my-3">
            <h1 className="display-4">Your Kindness. Our Platform</h1>
            <p className="lead">
                We’ve all been there. We all wish to do our part to help our society grow but
                finding a way can sometimes feel like searching for a needle in a haystack. We might
                end up giving up...
            </p>
            <hr className="my-4" />
            <p>
                Kindness may sometimes feel like a luxury. We're here to change that. There are
                dozens of people who are ready to step out and deliver the help people need and
                there are thousands more who contribute by providing the recources. We understand
                how important it is for these people to connect. This platform is built to bridge
                the gap between us.
            </p>
            <h2>Don’t know who needs you? We’ve got you covered.</h2>
            <p>
                The platform connects multiple Distribution camps with kind souls that are looking
                to donate the things they can spare. Food, clothing or anything you think can help.
            </p>
            <h2>Let’s us make it short.</h2>
            <p>
                We’ve got a short story to tell. To Register. Login. Tell us what you want to
                donate. Get connected.
            </p>
            <h2>Be a Distributor</h2>
            <p>
                If you woyld like to access the donations and deliver them to the right people, do
                register with us as a Distributor by contacting us thriugh our Contact page and get
                authorized.
            </p>
            <h2>Talk to us.</h2>
            <p>
                If you have any questions, do chat with our chatBot assistant, SacBot. you can find
                SacBot over at our Home page or down below. You can also contact us if SacBot isn't
                able to answer all your queries. Thank You!
            </p>
            <h2>Stay Safe!</h2>
            <br />
            <div className="row">
                <a
                    href="https://web-chat.global.assistant.watson.cloud.ibm.com/preview.
                html?region=eu-gb&integrationID=2f56951f-120f-4309-92a2-dcdd4580ab57&serviceInstan
                ceID=aee528ff-74f7-4657-b398-d01bb7a36378"
                >
                    <Button style={{ value: 'btn-dark btn-lg my-2' }} title="Chat With SacBot" />
                </a>
                <Link to="/donateFood">
                    <Button
                        style={{ value: 'btn-dark btn-lg my-2' }}
                        title="Donate Foods"
                        href="/"
                    />
                </Link>
                <Link to="/donateClothes">
                    <Button
                        style={{ value: 'btn-dark btn-lg my-2' }}
                        title="Donate Cloths"
                        href="/"
                    />
                </Link>
            </div>
        </div>
    </div>
);

export default JumbotronAbout;
