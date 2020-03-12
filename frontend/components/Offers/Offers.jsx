import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
import OfferTile from '../OfferTile/OfferTile.jsx';

const Offers = (props) => {
    if (!isEmpty(props)) {
        return (
            <Fragment>
                {props.offers.map((elem) => (
                    <div key={elem.offer_id}>
                        <OfferTile store={elem} />
                    </div>
                ))}
            </Fragment>
        );
    } else return null; //insert skeleton?
};

export default Offers;
