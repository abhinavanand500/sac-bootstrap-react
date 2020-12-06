import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <NavLink className='navbar-brand' to='/'>
                        SACATE
                    </NavLink>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <NavLink
                                    // className={`nav-link ${
                                    //     activeClassName === "selected"
                                    //         ? "active"
                                    //         : ""
                                    // }`}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                    className='nav-link'
                                    aria-current='page'
                                    exact
                                    to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    className='nav-link'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                    aria-current='page'
                                    to='/about'>
                                    About
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                    className='nav-link'
                                    aria-current='page'
                                    to='/profile'>
                                    Profile
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                    className='nav-link'
                                    aria-current='page'
                                    to='/notification'>
                                    Notification
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    className='nav-link'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                    aria-current='page'
                                    to='/dashboard'>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    className='nav-link'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                    aria-current='page'
                                    to='/feed'>
                                    Feed
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    className='nav-link'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                    aria-current='page'
                                    to='/contact'>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <a
                            href='https://join.slack.com/t/sacate/shared_invite/zt-g05v625j-CYp~WYorMyCYT7O2b3z4pg'
                            target='_blank'
                            rel='noreferrer'>
                            <Button
                                style={{ value: "btn btn-outline-success" }}
                                title={"JOIN US ON SLACK"}
                                href='https://join.slack.com/t/sacate/shared_invite/zt-g05v625j-CYp~WYorMyCYT7O2b3z4pg'
                            />
                        </a>
                        <a
                            href='https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=2f56951f-120f-4309-92a2-dcdd4580ab57&serviceInstanceID=aee528ff-74f7-4657-b398-d01bb7a36378'
                            target='_blank'
                            rel='noreferrer'>
                            <Button
                                style={{ value: "btn btn-outline-success" }}
                                title={"CHAT WITH CHATBOT"}
                            />
                        </a>
                        <Button
                            style={{ value: "btn btn-success" }}
                            title='Login'
                        />
                        <Button
                            style={{ value: "btn btn-success" }}
                            title='Sign Up'
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
