import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { Weather } from "../components/Weather";

class WeatherContainer extends PureComponent{
    render() {
        const { data } = this.props;
        return <Weather data={data}/>
    }
}

const mapStateToProps = state => {
    return {
        data: state.weatherReducer.currentWeather
    };
};

export default connect(mapStateToProps)(WeatherContainer);