import React from "react";

const Contact = () => {
    return (
        <div>
            <div className='container mt-5'>
                <h3>Contact SAC Admin</h3>
                <h6>
                    Note : Please Provide your information in issue block in
                    order to make this account as Donation Camp Admin Account
                </h6>
                <hr />
                <form action='/contact' method='POST'>
                    <div className='form-group'>
                        <label forhtml='exampleInputName'>Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleInputName'
                            aria-describedby='emailHelp'
                            name='name'
                        />
                    </div>
                    <div className='form-group'>
                        <label forhtml='exampleInputEmail1'>
                            Email address
                        </label>
                        <input
                            type='email'
                            className='form-control'
                            name='email'
                            id='exampleInputEmail1'
                            aria-describedby='emailHelp'
                        />
                    </div>
                    <div className='form-group'>
                        <label forhtml='exampleInputPassword1'>Phone</label>
                        <input
                            type='text'
                            className='form-control'
                            name='phone'
                            id='exampleInputPassword1'
                        />
                    </div>
                    <div className='form-group'>
                        <label forhtml='exampleInputPassword2'>
                            How can we help?
                        </label>
                        <textarea
                            className='form-control'
                            id='exampleInputPassword2'
                            name='content'
                            cols='20'
                            rows='5'></textarea>
                    </div>
                    <br />
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
