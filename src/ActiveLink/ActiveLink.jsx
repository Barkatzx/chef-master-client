import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
        className={({ isActive }) =>
        (isActive ? "active-style" : "")}>{children}
        </NavLink>
    );
};

export default ActiveLink;