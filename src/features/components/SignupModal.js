import React from "react";
import Button from "./Button";
const SignupModal = () => {
    return (
        <div>
            <div
                className='modal fade'
                id='signupModal'
                tabIndex='-1'
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
                                    <label forhtml='username'>Username</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='username'
                                        name='username'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label forhtml='fname'>First Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='fname'
                                        name='fname'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label forhtml='lname'>Last Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lname'
                                        name='lname'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label forhtml='emailid'>Email</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='emailid'
                                        name='email'
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label forhtml='exampleInputPassword1'>
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
                                    <label forhtml='exampleInputPassword2'>
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
                                    <label forhtml='lna'>
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
                                    <label forhtml='lnam'>Phone Number</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lnam'
                                        name='phone'
                                        required
                                    />
                                </div>
                                <br />
                                <Button
                                    style={{ value: "btn btn-primary" }}
                                    title='SignUp'
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

export default SignupModal;
