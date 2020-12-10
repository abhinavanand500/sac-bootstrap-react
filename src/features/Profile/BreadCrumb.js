import React from 'react';
import { NavLink } from 'react-router-dom';

const BreadCrumb = () => (
    <>
        <nav aria-label="breadcrumb card" className="mb-3">
            <ol className="breadcrumb bg-common">
                <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Profile Settings
                </li>
            </ol>
        </nav>
    </>
);

export default BreadCrumb;
