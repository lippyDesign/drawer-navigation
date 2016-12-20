import React from 'react';

export default props => {
    return (
        <div className={'leftSlider'}>
            <ul className="leftSliderList">
                <li>
                    <a href="#" className="sliderLink">
                        PEOPLE
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink">
                        PLACES
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink">
                        FOOD
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink">
                        FAVORITES
                    </a>
                </li>
            </ul>
        </div>
    );
};