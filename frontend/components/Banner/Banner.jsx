import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import styles from './banner.css';

const Banner = (props) => {
    if (!isEmpty(props))
        return (
            <Fragment>
                <div className={styles.banner}>
                    {props.bannerData.map((elem) => (
                        <Link
                            to={`/stores/${elem.assign_id}`}
                            key={elem.assign_id}>
                            <div className={styles.slide}>
                                <img
                                    src={elem.img}
                                    alt={elem.name}
                                    className={styles.img}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </Fragment>
        );
    else return null; //insert skeleton?
};

export default Banner;
