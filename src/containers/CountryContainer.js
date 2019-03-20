import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from 'axios';

import { Country } from "../components/Country";


class CountryContainer extends PureComponent {
    render() {
        const { data } = this.props;
        return (
            <Country data={data} onClick={this.clickHandler} />
        );
    }

    clickHandler = e => {
        const { openCountry, getWeather } = this.props;
        const target = e.target;
        const title = target.innerHTML;

        switch (target.tagName) {
            case "P":
                return openCountry(title);
            case "LI":
                return getWeather(title);
            default:
                return;
        }
    }

}

const mapStateToProps = state => {
    return {
        data: state.cityReducer
    };
};


const mapDispatchToProps = dispatch => {
    return {
        openCountry: city => {
            dispatch({ type: "OPEN_COUNTRY", payload: city });
        },
        getWeather: city => {
            let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ru&APPID=25a6d5ca11ccd233f8280063f1919871`;
            axios
                .get(url)
                .then( response => {
                    dispatch({type: "GET_WEATHER", payload: response.data})
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryContainer);