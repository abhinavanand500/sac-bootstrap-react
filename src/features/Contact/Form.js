import React from "react";

const Form = () => {
    return (
        <div>
            <form action='/contact' method='POST'>
                <div className='form-group'>
                    <label for='exampleInputName'>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='exampleInputName'
                        aria-describedby='emailHelp'
                        name='name'
                    />
                </div>
                <div className='form-group'>
                    <label for='exampleInputEmail1'>Email address</label>
                    <input
                        type='email'
                        className='form-control'
                        name='email'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                    />
                </div>
                <div className='form-group'>
                    <label for='exampleInputPassword1'>Phone</label>
                    <input
                        type='text'
                        className='form-control'
                        name='phone'
                        id='exampleInputPassword1'
                    />
                </div>
                <div className='form-group'>
                    <label for='exampleInputPassword2'>How can we help?</label>
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
    );
};

export default Form;
