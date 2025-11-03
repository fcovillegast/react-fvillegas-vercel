// MyComponent.js
import React from 'react';
import './LeftBar.css';

function LeftBar() {
    return (
        <div>
            <div className="left-title">Index</div>
            <ul className="nav flex-column">
                <li className="nav-item left-item">Contact</li>
                <li className="nav-item left-item active">Summary</li>
                <li className="nav-item left-item">Experience</li>
                <li className="nav-item left-item">Education</li>
                <li className="nav-item left-item">Links</li>
            </ul>
        </div>
    );
}

export default LeftBar;