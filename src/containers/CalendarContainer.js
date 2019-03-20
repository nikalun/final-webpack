import React from "react";
import { connect } from "react-redux";

import { RawCalendar as Calendar } from "../components/Calendar";

const mapDispatchToProps = dispatch => {
    return {
        onChange: e => {
            dispatch({ type: "SET_DATE", payload: e });
        }
    };
};

const mapStateToProps = state => {
    return {
        date: state.weatherReducer.date
    }
};

export const CalendarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
