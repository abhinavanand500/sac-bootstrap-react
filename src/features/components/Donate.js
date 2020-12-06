import React from "react";
import "./Component.css";
const Donate = ({ type, option1, option2, img }) => {
    return (
        <div>
            <div class='container mt-5'>
                <h3>Please fill in the details of your donation.</h3>
                <hr />
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='container'>
                            <img src={img} alt='Not Found' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form action='/donateCloth' method='POST'>
                            {option1 ? (
                                <div class='form-group'>
                                    <label for='clothType'>{type}</label>
                                    <select
                                        id='clothType'
                                        name='clothType'
                                        class='form-control'>
                                        <option value='Male'>{option1}</option>
                                        <option value='Female'>
                                            {option2}
                                        </option>
                                    </select>
                                </div>
                            ) : (
                                ""
                            )}
                            <div class='form-group'>
                                <label for='exampleClothDescription'>
                                    Description of donation.
                                </label>
                                <textarea
                                    class='form-control'
                                    id='exampleClothDescription'
                                    name='exampleClothDescription'
                                    cols='20'
                                    rows='5'></textarea>
                            </div>
                            <br />
                            <button type='submit' class='btn btn-primary'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <br />
                <br />
                <h4 className='redColorText'>Please Note:</h4>
                <h5>
                    Once you submit, your donation will be visible to the
                    registered distributors. Please specify the shelf life of
                    the products and ensure that all the details are entered
                    correctly before you hit submit and please do not submit
                    multiple responses for the same donation. Thank You!
                </h5>
            </div>
            <br />
        </div>
    );
};

export default Donate;
