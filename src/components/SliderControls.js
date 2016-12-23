import React from 'react';

export default props => {
    const { toggleLeftDrawer, toggleRightDrawer, leftIcon, rightIcon } = props;

    return (
        <ul className="drawerControlsList">
            <li className="leftLi">
                <button onClick={toggleLeftDrawer} className="leftButton">
                    <i className={leftIcon} aria-hidden="true"></i>
                </button>
            </li>
            <li className="rightLi">
                <button onClick={toggleRightDrawer} className="rightButton">
                    <i className={rightIcon} aria-hidden="true"></i>
                </button>
            </li>
        </ul>
    );
};