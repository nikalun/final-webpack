import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Calendar } from 'react-calendar';

class CalendarContainer extends PureComponent {
    render() {
        const { date, onChange } = this.props;
        return <Calendar value={date} onChange={onChange} />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: e => {
            dispatch({ type: 'SET_DATE', payload: e });
        }
    };
};

const mapStateToProps = state => {
    return {
        date: state.weatherReducer.date
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);