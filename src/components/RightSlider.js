import React from 'react';

export default props => {
    return (
        <div className={'rightSlider'}>
            <ul className="rightSliderList">
                <li>
                    <a href="#" className="sliderLink" onClick={() => this.setState({ whichDrawerOpen: 'closeRight', navButtonCogs: 'fa fa-cogs fa-3x' })}>
                        AIRPLANE
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={() => this.setState({ whichDrawerOpen: 'closeRight', navButtonCogs: 'fa fa-cogs fa-3x' })}>
                        CAR
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={() => this.setState({ whichDrawerOpen: 'closeRight', navButtonCogs: 'fa fa-cogs fa-3x' })}>
                        BUS
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={() => this.setState({ whichDrawerOpen: 'closeRight', navButtonCogs: 'fa fa-cogs fa-3x' })}>
                        TRAIN
                    </a>
                </li>
                <li>
                    <a href="#" className="sliderLink" onClick={() => this.setState({ whichDrawerOpen: 'closeRight', navButtonCogs: 'fa fa-cogs fa-3x' })}>
                        BIKE
                    </a>
                </li>
            </ul>
        </div>
    );
};