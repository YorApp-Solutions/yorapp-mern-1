import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
import styles from './offerTile.css';

const OfferTile = (props) => {
    return (
        !isEmpty(props.store) && (
            <Fragment>
                <div className={styles.tile}>
                    <div className={styles.imgContainer}>
                        <img src={props.store.img} className={styles.img} />
                    </div>
                    <div className={styles.text}>
                        <h3 className={styles.heading}>
                            {props.store.short_description}
                        </h3>
                        <p className={styles.des}>
                            {props.store.long_description}
                        </p>
                        <p className={styles.valid}>
                            Valid Till: {props.store.valid_to}
                        </p>
                    </div>
                </div>
            </Fragment>
        )
    );
};

export default OfferTile;
