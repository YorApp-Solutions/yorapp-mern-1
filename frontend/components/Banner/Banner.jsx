import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import styles from './banner.css';

const Banner = (props) => {
    if (!isEmpty(props))
        return (
            <Fragment>
                <div className={styles.banner}>
                    <ul>
                        {'Banner '}
                        {props.bannerData.map((elem) => (
                            <li key={elem.assign_id}>
                                <Link to={`/stores/${elem.assign_id}`}>
                                    {elem.assign_id}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        );
    else return null; //insert skeleton?
};

export default Banner;
