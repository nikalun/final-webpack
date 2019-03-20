import React from "react";
import PropTypes from "prop-types";
import { Calendar } from "react-calendar";

export const RawCalendar = props => {
    const { date, onChange } = props;
    return <Calendar value={date} onChange={onChange} />;
};

RawCalendar.propTypes = {
    date: PropTypes.instanceOf(Date),
    onChange: PropTypes.func
};