/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Button from './Button';
import axios from '../../apis/axios';

const LoginModal = () => {
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const apiLogin = async () => {
        const collection = {
            uname: uname,
            pass: password,
        };
        console.log(JSON.stringify(collection));
        const response = await axios.get('', {
            params: collection,
        });
    };

    return (
        <form onSubmit={apiLogin}>
            <div
                className="modal fade"
                id="signinModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="signupModal"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signinModal">
                                Login Here
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="/handleLogin" method="post">
                                <div className="form-group">
                                    <label forhtml="user">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="loginuser"
                                        name="loginusername"
                                        onChange={(e) => {
                                            setUname(e.target.value);
                                        }}
                                        value={uname}
                                    />
                                </div>
                                <div className="form-group">
                                    <label forhtml="loginpass">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="loginpass"
                                        name="loginpass"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        value={password}
                                    />
                                </div>
                                <br />
                                <Button
                                    style={{ value: 'btn btn-primary' }}
                                    title="Login"
                                    dataDismiss="modal"
                                    onclick={apiLogin}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoginModal;
