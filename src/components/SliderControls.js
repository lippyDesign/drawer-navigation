import React from 'react';

export default props => {
    const { openLeftDrawer, openRightDrawer, leftIcon, rightIcon } = props;

    return (
        <ul className="drawerControlsList">
            <li className="leftLi">
                <button onClick={openLeftDrawer}>
                    <i className={leftIcon} aria-hidden="true"></i>
                </button>
            </li>
            <li className="rightLi">
                <button onClick={openRightDrawer}>
                    <i className={rightIcon} aria-hidden="true"></i>
                </button>
            </li>
        </ul>
    );
};