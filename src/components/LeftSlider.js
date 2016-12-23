import React from 'react';

export default props => {
    const { toggleLeftDrawer } = props;
    return (
        <div className={'leftSlider'}>
            <ul className="leftSliderList">
                <li>
                    <a href="#" className="sliderLink" onClick={toggleLeftDrawer}>
                        PEOPLE
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={toggleLeftDrawer}>
                        PLACES
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={toggleLeftDrawer}>
                        FOOD
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={toggleLeftDrawer}>
                        FAVORITES
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={toggleLeftDrawer}>
                        MY PROFILE
                    </a>
                </li>
            </ul>
        </div>
    );
};