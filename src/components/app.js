import React, { Component } from 'react';
import LeftSlider from './LeftSlider';
import RightSlider from './RightSlider';
import SliderControls from './SliderControls';

export default class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            whichDrawerOpen: '',
            leftIcon: 'fa fa-bars fa-3x',
            rightIcon: 'fa fa-cogs fa-3x',
        };

        this.pageClick = this.pageClick.bind(this);
    }
    

    componentDidMount() {
        window.addEventListener('mousedown', this.pageClick, false);
    }

    componentWillUnmount() {
        window.removeEventListener('mousedown', this.pageClick, false);
    }

    toggleLeftDrawer() {
        if (this.state.whichDrawerOpen === 'openLeft') {
            this.setState({ whichDrawerOpen: 'closeLeft', leftIcon: 'fa fa-bars fa-3x' });
        } else {
            this.setState({ whichDrawerOpen: 'openLeft', leftIcon: 'fa fa-times fa-3x' });
        }
        
    }

    toggleRightDrawer() {
        if (this.state.whichDrawerOpen === 'openRight') {
            this.setState({ whichDrawerOpen: 'closeRight', rightIcon: 'fa fa-cogs fa-3x' });
        } else {
            this.setState({whichDrawerOpen: 'openRight', rightIcon: 'fa fa-times fa-3x' });
        }
    }

    pageClick(e) {
        console.log(e.target.className)
        const { whichDrawerOpen } = this.state;

        if (
            e.target.className === 'fa fa-bars fa-3x'
            || e.target.className === 'fa fa-times fa-3x'
            || e.target.className === 'fa fa-cogs fa-3x'
            || e.target.className === 'rightSlider'
            || e.target.className === 'leftSlider'
            || e.target.className === 'sliderLink'
            || e.target.className === 'rightButton'
            || e.target.className === 'leftButton'
            ) {
            return;
        }

        switch(whichDrawerOpen) {
            case 'openLeft':
                this.setState({ whichDrawerOpen: 'closeLeft', leftIcon: 'fa fa-bars fa-3x' });
                break;
            case 'openRight':
                this.setState({ whichDrawerOpen: 'closeRight', rightIcon: 'fa fa-cogs fa-3x' });
                break;
            default:
                return;
        }
    }

    render() {
        const { whichDrawerOpen, leftIcon, rightIcon } = this.state;

        if (whichDrawerOpen === 'openLeft') {
            return (
                <div className="drawerContainer">
                    <section className="sliderHolder">
                        <LeftSlider toggleLeftDrawer={this.toggleLeftDrawer.bind(this)} />
                    </section>
                    <main className={`main ${whichDrawerOpen}`}>
                        <SliderControls
                            toggleLeftDrawer={this.toggleLeftDrawer.bind(this)}
                            leftIcon={leftIcon}
                        />
                    </main>
                </div>
            );
        } else if (whichDrawerOpen === 'openRight') {
            return (
                <div className="drawerContainer">
                    <section className="sliderHolder sliderHolderHelper">
                        <RightSlider toggleRightDrawer={this.toggleRightDrawer.bind(this)} />
                    </section>
                    <main className={`main ${whichDrawerOpen}`}>
                        <SliderControls
                            toggleRightDrawer={this.toggleRightDrawer.bind(this)}
                            rightIcon={rightIcon}
                        />
                    </main>
                </div>
            );
        } else {
            return (
                <div className="drawerContainer">
                    <section className="sliderHolder">
                        <LeftSlider />
                        <RightSlider />
                    </section>
                    <main className={`main ${whichDrawerOpen}`}>
                        <SliderControls
                            toggleLeftDrawer={this.toggleLeftDrawer.bind(this)}
                            toggleRightDrawer={this.toggleRightDrawer.bind(this)}
                            leftIcon={leftIcon}
                            rightIcon={rightIcon}
                        />
                    </main>
                </div>
            );
        }
    }
}
