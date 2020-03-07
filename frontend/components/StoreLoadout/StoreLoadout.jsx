import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';

import Offers from '../../containers/Offers/Offers.jsx';

const StoreLoadout = (props) => {
    if (!isEmpty(props)) {
        return (
            <Fragment>
                abcd
                <Offers fromStore={true} onLandingPage={false} id={props.id} />
            </Fragment>
        );
    } else return null; //insert skeleton?
};

export default StoreLoadout;
