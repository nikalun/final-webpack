import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { parseDate } from '../utils';

export const Weather = props => {
    const { data } = props;
    let params;

    if (data.length === 0) {
        params = (
            <p>Нет данных.</p>
        )
    } else {
       params = data.map(item => {
           const main = item.main;
           const weather = item.weather;
           return (
               <div className="block" key={item.dt}>
                   <p className="date">{parseDate(item.dt_txt).time}</p>
                   <div>
                       <p className="temperature">Температура:</p>
                       <ul>
                           <li>Текущая: {main.temp} °C</li>
                           <li>Минимальная: {main.temp_min} °C</li>
                           <li>Максимальная: {main.temp_max} °C</li>
                       </ul>
                       <p>Давление: {main.pressure} мм. Рт. Ст.</p>
                       <p>Влажность: {main.humidity}%</p>
                       <p>Описание:</p>
                       <div>
                           {weather.map(weather => weather.description)}
                       </div>
                   </div>
               </div>
           )
       });
    }

    return <Fragment>{params}</Fragment>;
};

Weather.propTypes = {
    data: PropTypes.array
};

Weather.defaulthProps = {
    data: []
};
