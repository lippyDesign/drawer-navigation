import React from 'react';

export default (props) => {
    return (
        <nav>
            <ul className="mainNav">
                <li><button onClick={props.openLeftDrawer}>LB</button></li>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">LEGAL</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <ul className="profileNav">
                <li><a href="#">LOG IN</a></li>
                <li><a href="#">SIGN UP</a></li>
                <li><button onClick={props.openRightDrawer}>RB</button></li>
            </ul>
        </nav>
    );
}