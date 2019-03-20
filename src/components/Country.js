import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classname";

import { City } from "./City.js";

export const Country = props => {
    const {
        data: { list },
        onClick
    } = props;
    const content = list.map(item => {
        const className = classnames("item", {
            ["item_opened"]: item.opened
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

    return <Fragment>{content}</Fragment>;
};

Country.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
};

Country.defaultProps = {
    data: {}
};
