import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        whichDrawerOpen: ''
    };

    openLeftDrawer() {
        this.setState({whichDrawerOpen: 'openLeft'});
    }

    openRightDrawer() {
        this.setState({whichDrawerOpen: 'openRight'});
    }

    render() {
        const { whichDrawerOpen } = this.state;
        return (
            <div className="drawerContainer">
                <section className="sliderHolder">
                    <div className="leftSlider">
                        <ul className="leftSliderList">
                            <li><a href="#">PEOPLE</a></li>
                            <li><a href="#">PLACES</a></li>
                            <li><a href="#">FOOD</a></li>
                            <li><a href="#">FAVORITES</a></li>
                        </ul>
                    </div>
                    <div className="rightSlider">
                        <ul className="rightSliderList">
                            <li><a href="#">AIRPLANE</a></li>
                            <li><a href="#">CAR</a></li>
                            <li><a href="#">BUS</a></li>
                            <li><a href="#">TRAIN</a></li>
                            <li><a href="#">BIKE</a></li>
                        </ul>
                    </div>
                </section>
                <main className={whichDrawerOpen}>
                    <ul className="drawerControlsList">
                        <li className="leftLi">
                            <button onClick={this.openLeftDrawer.bind(this)}>
                                <i className="fa fa-bars fa-3x" aria-hidden="true"></i>
                            </button>
                        </li>
                        <li className="rightLi">
                            <button onClick={this.openRightDrawer.bind(this)}>
                                <i className="fa fa-cogs fa-3x" aria-hidden="true"></i>
                            </button>
                        </li>
                    </ul>
                </main>
            </div>
        );
    }
}
