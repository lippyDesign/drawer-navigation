import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            whichDrawerOpen: '',
            navButtonBars: 'fa fa-bars fa-3x',
            navButtonCogs: 'fa fa-cogs fa-3x'
        };

        this.pageClick = this.pageClick.bind(this);
    }
    

    componentDidMount() {
        window.addEventListener('mousedown', this.pageClick, false);
    }

    componentWillUnmount() {
        window.removeEventListener('mousedown', this.pageClick, false);
    }

    openLeftDrawer() {
        this.setState({ whichDrawerOpen: 'openLeft', navButtonBars: 'fa fa-times fa-3x' });
    }

    openRightDrawer() {
        this.setState({whichDrawerOpen: 'openRight', navButtonCogs: 'fa fa-times fa-3x'});
    }

    pageClick(e) {
        const { whichDrawerOpen } = this.state;

        if (e.target.className === 'fa fa-bars fa-3x' || e.target.className === 'fa fa-cogs fa-3x') {
            return
        }

        switch(whichDrawerOpen) {
            case 'openLeft':
                this.setState({ whichDrawerOpen: 'closeLeft', navButtonBars: 'fa fa-bars fa-3x' });
                break;
            case 'openRight':
                this.setState({ whichDrawerOpen: 'closeRight', navButtonCogs: 'fa fa-cogs fa-3x' });
                break;
            default:
                return;
        }
    }

    render() {
        const { whichDrawerOpen, navButtonBars, navButtonCogs } = this.state;
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
                                <i className={navButtonBars} aria-hidden="true"></i>
                            </button>
                        </li>
                        <li className="rightLi">
                            <button onClick={this.openRightDrawer.bind(this)}>
                                <i className={navButtonCogs} aria-hidden="true"></i>
                            </button>
                        </li>
                    </ul>
                </main>
            </div>
        );
    }
}
