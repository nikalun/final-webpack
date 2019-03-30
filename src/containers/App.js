import React, { Component } from 'react';

import CountryContainer from './CountryContainer';
import WeatherContainer from './WeatherContainer';
import CalendarContainer from './CalendarContainer';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='panel panel_top'>
                    <CalendarContainer />
                </div>
                <div className='panel panel_left'>
                    <CountryContainer />
                </div>
                <div className='panel panel_right'>
                    <WeatherContainer />
                </div>
            </div>
        );
    }
}
