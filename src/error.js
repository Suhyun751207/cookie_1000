// Error.js
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ color: 'red' }}>Something went wrong!</h1>
            <p>We couldn't find the page you were looking for.</p>
            <p>Please go back to the homepage.</p>
            <Link to="/">
                <button style={{ padding: '10px 20px', fontSize: '16px' }}>Go to Home</button>
            </Link>
        </div>
    );
};

export default Error;
