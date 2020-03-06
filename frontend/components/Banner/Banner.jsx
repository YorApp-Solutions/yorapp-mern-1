import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';

const Banner = (props) => {
    if (!isEmpty(props))
        return (
            <Fragment>
                <ul>
                    {'Banner '}
                    {props.bannerData.map((elem) => (
                        <li key={elem.assign_id}>{elem.assign_id}</li>
                    ))}
                </ul>
            </Fragment>
        );
    else return null; //insert skeleton?
};

export default Banner;
