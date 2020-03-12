import React from 'react';
import { isEmpty } from 'lodash';
import styles from './storeTile.css';

const StoreTile = (props) => {
    const store = props.store;
    return (
        !isEmpty(store) && (
            <div className={styles.tile}>
                <div className={styles.imgContainer}>
                    <div className={styles.img}>
                        <img src={store.logo} className={styles.logo} />
                    </div>
                </div>
                <div className={styles.text}>
                    <div className={styles.name}>{store.name}</div>
                    <div className={styles.category}>({store.category})</div>
                </div>
            </div>
        )
    );
};

export default StoreTile;
