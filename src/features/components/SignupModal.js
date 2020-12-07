import React from "react";

const SignupModal = () => {
    return (
        <div>
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
        </div>
    );
};

export default SignupModal;
