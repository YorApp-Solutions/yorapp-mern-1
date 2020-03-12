import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';

import StoreTile from '../StoreTile/StoreTile.jsx';
import LiveOffers from '../LiveOffers/LiveOffers.jsx';

const StoreLoadout = (props) => {
    if (!isEmpty(props)) {
        return (
            <Fragment>
                <StoreTile store={props.store} />
                <LiveOffers
                    fromStore={true}
                    onLandingPage={false}
                    id={props.id}
                />
            </Fragment>
        );
    } else return null; //insert skeleton?
};

export default StoreLoadout;
