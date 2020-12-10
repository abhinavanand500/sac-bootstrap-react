/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Component.css';

const Card = ({
    user,
    requested,
    acceptedBy,
    address,
    contact,
    acceptedAt,
    accept,
    type,
    buttonAccept,
}) => (
    <div className="mt-4 mb-4">
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-10 col-sm-12">
                        <div className="row">
                            <div className="col-md-3">
                                <h4>{user ? 'Donated By ' : 'Accepted By'} </h4>
                                <h4>Address</h4>
                                <h4>Contact</h4>
                                <h4>{requested ? 'Requested At' : 'Accepted At '} </h4>
                            </div>
                            <div className="col-md-7">
                                <h4>
                                    ::
                                    {acceptedBy}
                                </h4>
                                <h4>
                                    ::
                                    {address}
                                </h4>
                                <h4>
                                    ::
                                    {contact}
                                </h4>
                                <h4>
                                    ::
                                    {acceptedAt}
                                </h4>
                            </div>
                        </div>
                    </div>
                    {user && accept && buttonAccept ? (
                        <div className="col-md-2 col-sm-12 ">
                            <Button style={{ value: 'btn btn-success' }} title="Accept" />
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {requested ? (
                        <div>
                            <span className="tomato">other.user</span> wants to donate{' '}
                            <span className="chocolate"> items</span>
                        </div>
                    ) : accept ? (
                        <h5 className="card-title">
                            You accepted <span className="tomato">noti.endusers</span> donation of
                            notitype1
                        </h5>
                    ) : (
                        <div>
                            <span className="tomato">{acceptedBy}</span> accepted your request to
                            donate
                            {type}
                        </div>
                    )}
                </h5>
                <hr />
                <h5 className="darkcyan">Description - </h5>
                <p className="card-text">noti.description</p>
            </div>
        </div>
    </div>
);

Card.propTypes = {
    user: PropTypes.string,
    requested: PropTypes.string,
    acceptedBy: PropTypes.string,
    address: PropTypes.string,
    contact: PropTypes.string,
    acceptedAt: PropTypes.string,
    accept: PropTypes.string,
    buttonAccept: PropTypes.string,
    type: PropTypes.string,
};
Card.defaultProps = {
    user: '',
    requested: '',
    acceptedBy: '',
    address: '',
    contact: '',
    acceptedAt: '',
    accept: '',
    buttonAccept: '',
    type: '',
};

export default Card;
