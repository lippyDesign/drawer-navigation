import React from 'react';

export default props => {
    const {toggleRightDrawer} = props;
    return (
        <div className={'rightSlider'}>
            <ul className="rightSliderList">
                <li>
                    <a href="#" className="sliderLink" onClick={toggleRightDrawer}>
                        AIRPLANE
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={toggleRightDrawer}>
                        CAR
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={toggleRightDrawer}>
                        BUS
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={toggleRightDrawer}>
                        TRAIN
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={toggleRightDrawer}>
                        BIKE
                    </a>
                </li>
            </ul>
        </div>
    );
};