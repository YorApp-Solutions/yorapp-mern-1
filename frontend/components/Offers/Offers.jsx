import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';

const Offers = (props) => {
    if (!isEmpty(props)) {
        console.log(props);
        return (
            <Fragment>
                <ul>
                    {props.offers.map((elem) => (
                        <li key={elem.offer_id}>
                            Offer id: {elem.offer_id}, Store id: {elem.offer_id}
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    } else return null; //insert skeleton?
};

export default Offers;
