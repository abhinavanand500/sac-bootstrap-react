import React from "react";

const Feed = () => {
    return (
        <div>
            <div class='container'>
                {/* {% if request.user.is_superuser %} */}
                <div class='row'>
                    <div class='col-12'>
                        <br />
                        <br />
                        <h1>You are Admin User</h1>
                        <form class='form' method='POST' action='/create-tweet'>
                            {/* {%csrf_token%} */}
                            <div class='row'>
                                <div class='col-sm-12 col-md-3'>
                                    <div class='form-group'>
                                        <label for='exampleInputName'>
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            class='form-control'
                                            id='exampleInputName'
                                            aria-describedby='emailHelp'
                                            name='uname'
                                        />
                                    </div>
                                </div>
                                <div class='col-sm-12 col-md-9'>
                                    <div class='form-group'>
                                        <label for='exampleInputPassword2'>
                                            Write a feed
                                        </label>
                                        <textarea
                                            class='form-control'
                                            id='exampleInputPassword2'
                                            name='feed'
                                            rows='3'></textarea>
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                class='btn btn-primary my-3 mx-auto'>
                                Tweet
                            </button>
                        </form>
                    </div>
                </div>
                <hr />

                {/* {% endif %} */}
                <br />
                <h3>Donation Thanks</h3>
                {/* {% for feed in feeds %} */}
                <a href='/profile/{{feed.user1}}'>
                    <div class='card my-4'>
                        <div class='card-header aa' style={{ color: "white" }}>
                            Thank you for the Donation!
                        </div>
                        <div class='card-body bb'>
                            <blockquote class='blockquote mb-0'>
                                <p style={{ color: "black" }}>feed.feed</p>
                                <footer
                                    class='blockquote-footer my-2'
                                    style={{ color: "#800000" }}>
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
