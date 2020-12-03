import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <a className='navbar-brand' href='#'>
                    SACATE
                </a>
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
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#'>
                                Home <span className='sr-only'>(current)</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                About <span className='sr-only'>(current)</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Feed <span className='sr-only'>(current)</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Contact{" "}
                                <span className='sr-only'>(current)</span>
                            </a>
                        </li>
                    </ul>
                    <div className='ml-auto form-inline mx-1'>
                        <a
                            className='btn btn-outline-success my-2 my-sm-2 mx-2'
                            href='https://join.slack.com/t/sacate/shared_invite/zt-g05v625j-CYp~WYorMyCYT7O2b3z4pg'
                            role='button'
                            target='_blank'>
                            Join us on Slack
                        </a>

                        <div className='ml-auto form-inline '>
                            <a
                                className='btn btn-outline-success my-2 my-sm-2'
                                href='https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=2f56951f-120f-4309-92a2-dcdd4580ab57&serviceInstanceID=aee528ff-74f7-4657-b398-d01bb7a36378'
                                role='button'
                                target='_blank'>
                                Chat With SacBot
                            </a>
                        </div>
                    </div>
                    <button
                        type='button'
                        className='btn btn-success mr-2 ml-2'
                        data-toggle='modal'
                        data-target='#signinModal'>
                        Login
                    </button>

                    <button
                        type='button'
                        className='btn btn-success mr-2 ml-2'
                        data-toggle='modal'
                        data-target='#signupModal'>
                        SignUp
                    </button>
                </div>
            </nav>
            <div
                className='modal fade'
                id='signupModal'
                tabindex='-1'
                role='dialog'
                aria-labelledby='signupModal'
                aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='signupModal'>
                                SignUp Here
                            </h5>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <form action='/handleSignup' method='post'>
                                <div className='form-group'>
                                    <label for='username'>Username</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='username'
                                        name='username'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='fname'>First Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='fname'
                                        name='fname'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='lname'>Last Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lname'
                                        name='lname'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='emailid'>Email</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='emailid'
                                        name='email'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='exampleInputPassword1'>
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='exampleInputPassword1'
                                        name='pass1'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='exampleInputPassword2'>
                                        Confirm your Password
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='exampleInputPassword2'
                                        name='pass2'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='lna'>
                                        Postal Code of your Area
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lna'
                                        name='zip'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='lnam'>Phone Number</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lnam'
                                        name='phone'
                                        required
                                    />
                                </div>
                                <br />
                                <button
                                    type='submit'
                                    className='btn btn-primary'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='modal fade'
                id='signinModal'
                tabindex='-1'
                role='dialog'
                aria-labelledby='signupModal'
                aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='signinModal'>
                                Login Here
                            </h5>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <form action='/handleLogin' method='post'>
                                <div className='form-group'>
                                    <label for='user'>Username</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='loginuser'
                                        name='loginusername'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='loginpass'>Password</label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='loginpass'
                                        name='loginpass'
                                    />
                                </div>
                                <br />
                                <button
                                    type='submit'
                                    className='btn btn-primary'>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
