// MyComponent.js
import React from 'react';
import './Top.css'


function Top(props) {
    return (
        <>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light navcolor-bg nav-border nav-font" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Curriculum Vitae - Francisco Villegas</a>
            </div>
        </nav>
        </>
    );
}

export default Top;