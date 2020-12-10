import React from 'react';
import './Component.css';
import Button from './Button';
const Donate = ({ type, option1, option2, img }) => {
    return (
        <div>
            <div className="container mt-5">
                <h3>Please fill in the details of your donation.</h3>
                <hr />
                <div className="row">
                    <div className="col-lg-6">
                        <div className="container">
                            <img src={img} alt="Not Found" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form action="/donateCloth" method="POST">
                            {option1 ? (
                                <div className="form-group">
                                    <label forhtml="clothType">{type}</label>
                                    <select
                                        id="clothType"
                                        name="clothType"
                                        className="form-control"
                                    >
                                        <option value="Male">{option1}</option>
                                        <option value="Female">{option2}</option>
                                    </select>
                                </div>
                            ) : (
                                ''
                            )}
                            <div className="form-group">
                                <label forhtml="exampleClothDescription">
                                    Description of donation.
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleClothDescription"
                                    name="exampleClothDescription"
                                    cols="20"
                                    rows="5"
                                ></textarea>
                            </div>
                            <br />
                            <Button style={{ value: 'btn btn-primary' }} title="Submit" />
                        </form>
                    </div>
                </div>

                <br />
                <br />
                <h4 className="redColorText">Please Note:</h4>
                <h5>
                    Once you submit, your donation will be visible to the registered distributors.
                    Please specify the shelf life of the products and ensure that all the details
                    are entered correctly before you hit submit and please do not submit multiple
                    responses for the same donation. Thank You!
                </h5>
            </div>
            <br />
        </div>
    );
};

export default Donate;
