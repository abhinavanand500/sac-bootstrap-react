import React from "react";
import Button from "./Button";
const LoginModal = () => {
    return (
        <div>
            <div
                className='modal fade'
                id='signinModal'
                tabIndex='-1'
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
                                    <label forhtml='user'>Username</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='loginuser'
                                        name='loginusername'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label forhtml='loginpass'>Password</label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='loginpass'
                                        name='loginpass'
                                    />
                                </div>
                                <br />
                                <Button
                                    style={{ value: "btn btn-primary" }}
                                    title='Login'
                                    dataDismiss='modal'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
