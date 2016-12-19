import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            whichDrawerOpen: '',
            navButtonBars: 'fa fa-bars fa-3x',
            navButtonCogs: 'fa fa-cogs fa-3x',
            rightListDisplay: '',
            leftListDisplay: ''
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
        this.setState({ whichDrawerOpen: 'openLeft', navButtonBars: 'fa fa-times fa-3x', rightListDisplay: 'displayNone', leftListDisplay: '' });
    }

    openRightDrawer() {
        this.setState({whichDrawerOpen: 'openRight', navButtonCogs: 'fa fa-times fa-3x', rightListDisplay: '', leftListDisplay: 'displayNone' });
    }

    pageClick(e) {
        const { whichDrawerOpen } = this.state;

        if (
            e.target.className === 'fa fa-bars fa-3x'
            || e.target.className === 'fa fa-cogs fa-3x'
            || e.target.className === 'rightSlider'
            || e.target.className === 'sliderLink'
            ) {
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
        const { whichDrawerOpen, navButtonBars, navButtonCogs, rightListDisplay, leftListDisplay } = this.state;
        return (
            <div className="drawerContainer">
                <section className="sliderHolder">
                    <div className={`leftSlider ${leftListDisplay}`}>
                        <ul className="leftSliderList">
                            <li>
                                <a href="#" className="sliderLink" onClick={() => this.setState({ whichDrawerOpen: 'closeLeft', navButtonBars: 'fa fa-bars fa-3x' })}>
                                    PEOPLE
                                </a>
                            </li>
                            <li>
                                <a href="#" className="sliderLink" onClick={() => this.setState({ whichDrawerOpen: 'closeLeft', navButtonBars: 'fa fa-bars fa-3x' })}>
                                    PLACES
                                </a>
                            </li>
                            <li>
                                <a href="#" className="sliderLink" onClick={() => this.setState({ whichDrawerOpen: 'closeLeft', navButtonBars: 'fa fa-bars fa-3x' })}>
                                    FOOD
                                </a>
                            </li>
                            <li>
                                <a href="#" className="sliderLink" onClick={() => this.setState({ whichDrawerOpen: 'closeLeft', navButtonBars: 'fa fa-bars fa-3x' })}>
                                    FAVORITES
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={`rightSlider ${rightListDisplay}`}>
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
                </section>
                <main className={`main ${whichDrawerOpen}`}>
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
