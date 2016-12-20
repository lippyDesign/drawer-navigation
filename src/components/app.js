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

    openLeftDrawer() {
        this.setState({ whichDrawerOpen: 'openLeft', leftIcon: 'fa fa-times fa-3x' });
    }

    openRightDrawer() {
        this.setState({whichDrawerOpen: 'openRight', rightIcon: 'fa fa-times fa-3x' });
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
        const { whichDrawerOpen, leftIcon, rightIcon } = this.state;
        return (
            <div className="drawerContainer">
                <section className="sliderHolder">
                    <LeftSlider />
                    <RightSlider />
                </section>
                <main className={`main ${whichDrawerOpen}`}>
                    <SliderControls
                        openLeftDrawer={this.openLeftDrawer.bind(this)}
                        openRightDrawer={this.openRightDrawer.bind(this)}
                        leftIcon={leftIcon}
                        rightIcon={rightIcon}
                    />
                </main>
            </div>
        );
    }
}
