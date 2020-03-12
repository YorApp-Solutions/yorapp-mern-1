import React, { Fragment } from 'react';

import Offers from '../../containers/Offers/Offers.jsx';

import styles from './liveOffers.css';

const LiveOffers = (props) => {
    return (
        <Fragment>
            <section className={styles.offers}>
                <h2 className={styles.heading}>Live Offers</h2>
                <div>
                    <Offers
                        fromStore={props.fromStore}
                        onLandingPage={props.onLandingPage}
                        id={props.id}
                        category={props.category}
                    />
                </div>
            </section>
        </Fragment>
    );
};

export default LiveOffers;
