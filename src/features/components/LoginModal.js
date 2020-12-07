import React from "react";

const LoginModal = () => {
    return (
        <div>
            <div
                class='modal fade'
                id='signinModal'
                tabindex='-1'
                role='dialog'
                aria-labelledby='signupModal'
                aria-hidden='true'>
                <div class='modal-dialog'>
                    <div class='modal-content'>
                        <div class='modal-header'>
                            <h5 class='modal-title' id='signinModal'>
                                Login Here
                            </h5>
                            <button
                                type='button'
                                class='close'
                                data-dismiss='modal'
                                aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div class='modal-body'>
                            <form action='/handleLogin' method='post'>
                                <div class='form-group'>
                                    <label for='user'>Username</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        id='loginuser'
                                        name='loginusername'
                                    />
                                </div>
                                <div class='form-group'>
                                    <label for='loginpass'>Password</label>
                                    <input
                                        type='password'
                                        class='form-control'
                                        id='loginpass'
                                        name='loginpass'
                                    />
                                </div>
                                <br />
                                <button type='submit' class='btn btn-primary'>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
