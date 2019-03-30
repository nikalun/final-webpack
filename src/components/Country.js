import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { City } from './City.js';

export const Country = props => {
    const {
        data: { list },
        country,
        onClick
    } = props;
    const renderCities = list.map(item => {
        const className = classnames('item', {
            ['item_opened']: item.country === country
        });

        return (
            <div onClick={onClick} key={item.id} className={className}>
                <p>{item.country}</p>
                <ul>
                    {item.cities.map(el => (
                        <City key={el.id} name={el.name} />
                    ))}
                </ul>
            </div>
        );
    });

    return <Fragment>{renderCities}</Fragment>;
};

Country.propTypes = {
    data: PropTypes.shape({
        list: PropTypes.array
    }),
    onClick: PropTypes.func
};

Country.defaultProps = {
    data: {}
};
