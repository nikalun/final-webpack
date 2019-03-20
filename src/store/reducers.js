import { parseDate } from "../utils";

import CitiesList from "../city.json";

export function cityReducer(state = CitiesList, action) {
    switch (action.type) {
        case "OPEN_COUNTRY":
            return {
                ...state,
                list: state.list.map(item => {
                    if (item.country !== action.payload) {
                        return item;
                    }

                    return {
                        ...item,
                        opened: !item.opened
                    };
                })
            };
        default:
            return state;
    }
}

const initialState = {
    date: new Date(),
    currentWeather: []
};

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_WEATHER":
            const currentWeather = action.payload.list.filter(item => parseDate(item.dt_txt).ymd === parseDate(state.date).ymd);
            return {
                ...state,
                currentWeather: currentWeather
            };
        case "SET_DATE":
            return {
                ...state,
                date: action.payload
            };
        default:
            return state;
    }
}
