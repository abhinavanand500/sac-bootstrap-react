import React from "react";

const Feed = () => {
    return (
        <div>
            <div className='container'>
                {/* {% if request.user.is_superuser %} */}
                <div className='row'>
                    <div className='col-12'>
                        <br />
                        <br />
                        <h1>You are Admin User</h1>
                        <form
                            className='form'
                            method='POST'
                            action='/create-tweet'>
                            {/* {%csrf_token%} */}
                            <div className='row'>
                                <div className='col-sm-12 col-md-3'>
                                    <div className='form-group'>
                                        <label forhtml='exampleInputName'>
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='exampleInputName'
                                            aria-describedby='emailHelp'
                                            name='uname'
                                        />
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-9'>
                                    <div className='form-group'>
                                        <label forhtml='exampleInputPassword2'>
                                            Write a feed
                                        </label>
                                        <textarea
                                            className='form-control'
                                            id='exampleInputPassword2'
                                            name='feed'
                                            rows='3'></textarea>
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary my-3 mx-auto'>
                                Tweet
                            </button>
                        </form>
                    </div>
                </div>
                <hr />
                <br />
                <h3>Donation Thanks</h3>
                <a href='/profile/{{feed.user1}}'>
                    <div className='card my-4'>
                        <div className='card-header aa'>
                            <h4>Thank you for the Donation!</h4>
                        </div>
                        <div className='card-body bb'>
                            <blockquote className='blockquote mb-0'>
                                <p className='paragraph'>feed.feed</p>
                                <footer className='blockquote-footer my-2'>
                                    Donation done by -{" "}
                                    <strong title='Source Title'>
                                        feed.user1
                                    </strong>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Feed;
