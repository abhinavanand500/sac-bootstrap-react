import React from "react";
import contactSvg from "./contact.svg";
import Form from "./Form";
function Contact() {
    return (
        <div className='container mt-5'>
            <h3>Contact SAC Admin</h3>
            <h6>
                Note : Please Provide your information in issue block in order
                to make this account as Donation Camp Admin Account
            </h6>
            <hr />
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <div className='container mt-5'>
                        <br />
                        <img
                            style={{ width: "100%" }}
                            src={contactSvg}
                            alt='hii'
                        />
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <Form />
                </div>
            </div>
            <br />
        </div>
    );
}

export default Contact;
