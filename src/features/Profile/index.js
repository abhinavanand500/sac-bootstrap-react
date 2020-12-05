import React from "react";
import BreadCrumb from "./BreadCrumb";
const Profile = () => {
    return (
        <div>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-md-10 col-11 mx-auto'>
                        <BreadCrumb />
                        <div className='row'>
                            <div className='col-lg-3 col-md-4 d-md-block'>
                                <div className='card bg-common card-left bg-common'>
                                    <div className='card-body'>
                                        <nav className='nav d-md-block d-none '>
                                            <a
                                                data-toggle='tab'
                                                className='nav-link active'
                                                aria-current='page'
                                                href='#profile'>
                                                <i
                                                    className='fa fa-user mr-1'
                                                    aria-hidden='true'></i>{" "}
                                                Profile
                                            </a>
                                            <a
                                                data-toggle='tab'
                                                className='nav-link'
                                                href='#account'>
                                                <i
                                                    className='fa fa-user-cog mr-1'
                                                    aria-hidden='true'></i>{" "}
                                                Account Settings
                                            </a>
                                            <a
                                                data-toggle='tab'
                                                className='nav-link'
                                                href='#security'>
                                                <i
                                                    className='fa fa-user-shield mr-1'
                                                    aria-hidden='true'></i>{" "}
                                                Security
                                            </a>
                                            <a
                                                data-toggle='tab'
                                                className='nav-link'
                                                href='#notification'>
                                                <i
                                                    className='fa fa-bell mr-1'
                                                    aria-hidden='true'></i>{" "}
                                                Notification
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-9 col-md-8 '>
                                <div className='card'>
                                    <div className='card-header border-bottom mb-3 d-md-none'>
                                        <ul className='nav nav-tabs card-header-tabs nav-fill'>
                                            <li className='nav-item'>
                                                <a
                                                    data-toggle='tab'
                                                    className='nav-link active'
                                                    aria-current='page'
                                                    href='#profile'>
                                                    <i
                                                        className='fa fa-user mr-1'
                                                        aria-hidden='true'></i>
                                                </a>
                                            </li>
                                            <li className='nav-item'>
                                                <a
                                                    data-toggle='tab'
                                                    className='nav-link'
                                                    href='#account'>
                                                    <i
                                                        className='fa fa-user-cog mr-1'
                                                        aria-hidden='true'></i>
                                                </a>
                                            </li>
                                            <li className='nav-item'>
                                                <a
                                                    data-toggle='tab'
                                                    className='nav-link'
                                                    href='#security'>
                                                    <i
                                                        className='fa fa-user-shield mr-1'
                                                        aria-hidden='true'></i>
                                                </a>
                                            </li>
                                            <li className='nav-item'>
                                                <a
                                                    data-toggle='tab'
                                                    className='nav-link'
                                                    href='#notification'>
                                                    <i
                                                        className='fa fa-bell mr-1'
                                                        aria-hidden='true'></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='card-body tab-content border-0'>
                                        <div
                                            className='tab-pane active'
                                            id='profile'>
                                            <h4>YOUR PROFILE INFORMATION</h4>
                                            <hr />
                                            <form
                                                action='/profile'
                                                method='POST'>
                                                <div className='row'>
                                                    <div className='mb-3 col-6'>
                                                        <label
                                                            for='exampleFormControlInput1'
                                                            className='form-label'>
                                                            First Name
                                                        </label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            id='exampleFormControlInput1'
                                                            placeholder='Enter your Name'
                                                            value='{{datas.firstname}}'
                                                            name='fnamea'
                                                        />
                                                        <small className='form-text text-muted'>
                                                            Please Enter your
                                                            First Name
                                                        </small>
                                                    </div>
                                                    <div className='mb-3 col-6'>
                                                        <label
                                                            for='exampleFormControlInput2'
                                                            className='form-label'>
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            id='exampleFormControlInput2'
                                                            placeholder='Enter your Name'
                                                            value='{{datas.lastname}}'
                                                            name='lnamea'
                                                        />
                                                        <small className='form-text text-muted'>
                                                            Please Enter your
                                                            Last Name
                                                        </small>
                                                    </div>
                                                </div>
                                                <fieldset
                                                    disabled
                                                    aria-label='Disabled fieldset example'>
                                                    <div className='mb-3'>
                                                        <label
                                                            for='disabledTextInput'
                                                            className='form-label'>
                                                            Username
                                                        </label>
                                                        <input
                                                            type='text'
                                                            id='disabledTextInput'
                                                            className='form-control'
                                                            placeholder='Enter your Username'
                                                            value='{{ datas.username }}'
                                                        />
                                                        <small className='form-text text-muted'>
                                                            You can not change
                                                            Your Username
                                                        </small>
                                                    </div>
                                                    <div className='mb-3'>
                                                        <label
                                                            for='disabledTextInput'
                                                            className='form-label'>
                                                            Email
                                                        </label>
                                                        <input
                                                            type='email'
                                                            className='form-control'
                                                            id='disabledTextInput'
                                                            placeholder='Enter your Email'
                                                            value='{{ datas.email }}'
                                                        />
                                                        <small className='form-text text-muted'>
                                                            Please Enter your
                                                            current Email
                                                        </small>
                                                    </div>
                                                </fieldset>
                                                <div className='mb-3'>
                                                    <label
                                                        for='exampleFormControlInput1'
                                                        className='form-label'>
                                                        Phone
                                                    </label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='exampleFormControlInput1'
                                                        placeholder='Enter your Phone Number'
                                                        value='{{datas.phone}}'
                                                        name='phone'
                                                    />
                                                </div>
                                                <div className='mb-3'>
                                                    <label
                                                        for='exampleFormControlInput1'
                                                        className='form-label'>
                                                        Address
                                                    </label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='exampleFormControlInput1'
                                                        placeholder='Enter your Address'
                                                        value='{{datas.address}}'
                                                        name='address'
                                                    />
                                                </div>
                                                <div className='mb-3'>
                                                    <label
                                                        for='exampleFormControlInput1'
                                                        className='form-label'>
                                                        Postal-Code
                                                    </label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='exampleFormControlInput1'
                                                        placeholder='Enter your Postal-Code'
                                                        value='{{datas.pin}}'
                                                        name='pin'
                                                    />
                                                </div>
                                                <div className='form-group form-text text-muted small'>
                                                    Please check your Details
                                                    and update it, if it is
                                                    Incorrect
                                                </div>
                                                <br />
                                                <button
                                                    className='btn btn-outline-info mx-1'
                                                    type='submit'>
                                                    Update Profile
                                                </button>
                                                <button
                                                    className='btn btn-outline-info mx-1'
                                                    type='reset'>
                                                    Reset
                                                </button>
                                            </form>
                                        </div>
                                        <div className='tab-pane' id='account'>
                                            <h4>ACCOUNT SETTINGS</h4>
                                            <hr />
                                            <form
                                                action='/delete'
                                                method='POST'>
                                                <div className='mb-3'>
                                                    <fieldset
                                                        disabled
                                                        aria-label='Disabled fieldset example'>
                                                        <label
                                                            for='disabledTextInput'
                                                            className='form-label'>
                                                            Username
                                                        </label>
                                                        <input
                                                            type='text'
                                                            id='disabledTextInput'
                                                            className='form-control'
                                                            placeholder='{{datas.username}}'
                                                        />
                                                    </fieldset>
                                                    <small className='form-text text-muted'>
                                                        You will loose all your
                                                        data if you delete this
                                                        Account.
                                                    </small>
                                                    <hr />
                                                    <h6
                                                        style={{
                                                            color: "red",
                                                        }}>
                                                        DELETE ACCOUNT
                                                    </h6>
                                                    <br />
                                                    <button
                                                        className='btn btn-outline-danger mx-1'
                                                        type='submit'>
                                                        DELETE
                                                    </button>
                                                    <br />
                                                    <small className='form-text text-muted'>
                                                        Are you sure you want to{" "}
                                                        <span
                                                            style={{
                                                                color: "red",
                                                            }}>
                                                            delete this
                                                            Permanently
                                                        </span>
                                                    </small>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='tab-pane' id='security'>
                                            <h4>SECURITY</h4>
                                            <hr />
                                            <form
                                                action='/changepassword'
                                                method='POST'>
                                                <label
                                                    for='inputPassword5'
                                                    className='form-label'>
                                                    Change Password
                                                </label>
                                                <input
                                                    type='password'
                                                    id='inputPassword5'
                                                    className='form-control my-1'
                                                    aria-describedby='passwordHelpBlock'
                                                    placeholder='Enter your Old Password'
                                                    name='old'
                                                />
                                                <br />
                                                <input
                                                    type='password'
                                                    id='inputPassword6'
                                                    className='form-control my-1'
                                                    aria-describedby='passwordHelpBlock'
                                                    placeholder='Enter your New Password'
                                                    name='new'
                                                />
                                                <input
                                                    type='password'
                                                    id='inputPassword7'
                                                    className='form-control my-1'
                                                    aria-describedby='passwordHelpBlock'
                                                    placeholder='Confirm your New Password'
                                                    name='new1'
                                                />
                                                <div
                                                    id='passwordHelpBlock'
                                                    className='form-text'>
                                                    Your password must be 8-20
                                                    characters long, contain
                                                    letters and numbers, and
                                                    must not contain spaces,
                                                    special characters, or
                                                    emoji.
                                                </div>
                                                <hr />
                                                <button
                                                    className='btn btn-outline-info mx-1'
                                                    type='submit'>
                                                    CHANGE YOUR PASSWORD
                                                </button>
                                                <br />
                                            </form>
                                            <hr />
                                            <h5 className='mb-2'>Sessions</h5>
                                            <p className='text-muted small'>
                                                This is the list of Device From
                                                which you have logged into your
                                                account
                                            </p>
                                            <ul className='list-group'>
                                                <li className='list-group-item'>
                                                    <div>
                                                        <h6>Ranchi</h6>
                                                        <small className='text-muted'>
                                                            Your Current Session
                                                            is in INDIA
                                                        </small>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className='tab-pane'
                                            id='notification'>
                                            <h4>NOTIFICATION</h4>
                                            <hr />
                                            <form>
                                                <h6>Security Alerts</h6>
                                                <div
                                                    id='passwordHelpBlock'
                                                    className='form-text'>
                                                    Recieve Security Alert
                                                    message in your Email
                                                </div>
                                                <div className='form-check mt-2'>
                                                    <input
                                                        className='form-check-input'
                                                        type='checkbox'
                                                        value=''
                                                        id='flexCheckDefault'
                                                        checked
                                                    />
                                                    <label
                                                        className='form-check-label'
                                                        for='flexCheckDefault'>
                                                        Email each time when
                                                        your account gets logged
                                                        In
                                                    </label>
                                                </div>
                                                <div className='form-check'>
                                                    <input
                                                        className='form-check-input'
                                                        type='checkbox'
                                                        value=''
                                                        id='flexCheckChecked'
                                                    />
                                                    <label
                                                        className='form-check-label'
                                                        for='flexCheckChecked'>
                                                        Email your all ongoing
                                                        detail of each months
                                                    </label>
                                                </div>
                                                <hr />
                                                <div className='mb-3'>
                                                    <label className='d-block'>
                                                        SMS Notification
                                                    </label>
                                                    <ul className='list-group'>
                                                        <li className='list-group-item'>
                                                            <div>
                                                                <h6>
                                                                    Comments
                                                                </h6>
                                                                <div className='form-check form-switch'>
                                                                    <input
                                                                        className='form-check-input ml-1'
                                                                        type='checkbox'
                                                                        id='flexSwitchCheckChecked'
                                                                        checked
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className='list-group-item'>
                                                            <div>
                                                                <h6>
                                                                    Reminders
                                                                </h6>
                                                                <div className='form-check form-switch'>
                                                                    <input
                                                                        className='form-check-input ml-1'
                                                                        type='checkbox'
                                                                        id='flexSwitchCheckChecked'
                                                                        checked
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className='list-group-item'>
                                                            <div>
                                                                <h6>Events</h6>
                                                                <div className='form-check form-switch'>
                                                                    <input
                                                                        className='form-check-input ml-1'
                                                                        type='checkbox'
                                                                        id='flexSwitchCheckChecked'
                                                                        checked
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className='list-group-item'>
                                                            <div>
                                                                <h6 className='ml-1'>
                                                                    Updates From
                                                                    People
                                                                </h6>
                                                                <div className='form-check form-switch'>
                                                                    <input
                                                                        className='form-check-input ml-1'
                                                                        type='checkbox'
                                                                        id='flexSwitchCheckChecked'
                                                                        checked
                                                                    />
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <button
                                                        className='btn btn-outline-info mx-1 my-2'
                                                        type='submit'>
                                                        UPDATE YOUR NOTIFICATION
                                                        SETTINGS
                                                    </button>
                                                    <br />
                                                    <small className='form-text text-muted'>
                                                        Are you sure you want to{" "}
                                                        <span
                                                            style={{
                                                                color: "green",
                                                            }}>
                                                            update your
                                                            notification
                                                            settings
                                                        </span>
                                                    </small>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='tab-pane' id='billing'>
                                            <h4>BILLING SETTING</h4>
                                            <hr />
                                            <form>
                                                <h5 className='form-text text-muted'>
                                                    Enter your Card Details
                                                </h5>
                                                <div className='col-md-6'>
                                                    <label
                                                        for='inputEmail4'
                                                        className='form-label'>
                                                        First Name On Card
                                                    </label>
                                                    <input
                                                        type='email'
                                                        className='form-control'
                                                        id='inputEmail4'
                                                    />
                                                </div>
                                                <div className='col-md-6'>
                                                    <label
                                                        for='inputEmail4'
                                                        className='form-label'>
                                                        Last Name On Card
                                                    </label>
                                                    <input
                                                        type='email'
                                                        className='form-control'
                                                        id='inputEmail4'
                                                    />
                                                </div>
                                                <div className='col-12'>
                                                    <label
                                                        for='inputAddress'
                                                        className='form-label'>
                                                        Card Number
                                                    </label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='inputAddress'
                                                        placeholder='Enter your Card Number'
                                                    />
                                                </div>
                                                <div className='col-12'>
                                                    <label
                                                        for='inputAddress2'
                                                        className='form-label'>
                                                        Confirm Card Number
                                                    </label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='inputAddress2'
                                                        placeholder='Enter your Card Number again to Confirm'
                                                    />
                                                </div>
                                                <div className='col-md-7'>
                                                    <label
                                                        for='inputCity'
                                                        className='form-label'>
                                                        Enter Date
                                                    </label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='inputCity'
                                                        placeholder='DD/MM/YYYY'
                                                    />
                                                </div>
                                                <div className='col-md-3'>
                                                    <label
                                                        for='inputZip'
                                                        className='form-label'>
                                                        CVV
                                                    </label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='inputZip'
                                                    />
                                                </div>
                                                <div className='col-12'>
                                                    <div className='form-check'>
                                                        <input
                                                            className='form-check-input'
                                                            type='checkbox'
                                                            id='gridCheck'
                                                        />
                                                        <label
                                                            className='form-check-label'
                                                            for='gridCheck'>
                                                            Check me out
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className='col-12'>
                                                    <button
                                                        type='submit'
                                                        className='btn btn-primary'>
                                                        Add This Card Details
                                                    </button>
                                                </div>
                                            </form>
                                            <hr />
                                            <div>
                                                <h5>Your Saved Card</h5>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <div>
                                                            <h6>
                                                                Abhinav Anand
                                                            </h6>
                                                            <small className='text-muted'>
                                                                Your Details are
                                                                safe with us
                                                            </small>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
