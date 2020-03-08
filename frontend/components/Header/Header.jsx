import React, { Fragment } from 'react';
import styles from './header.css';
import classNames from 'classnames';
import logo from '../../../public/images/YORAPP.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBell,
    faShoppingCart,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <Fragment>
            <header
                className={classNames(
                    styles.header,
                    !props.visible ? styles.hidden : ''
                )}>
                <div className={styles.floatL}>
                    <FontAwesomeIcon
                        icon={faBars}
                        size="sm"
                        className={styles.icon}
                    />
                </div>
                <div className={styles.logo}>
                    <img src={logo} height="20px" />
                    <p className={styles.logoText}>Jab jao tab pao discount!</p>
                </div>
                <div className={styles.floatR}>
                    <Link to="/notifications">
                        <FontAwesomeIcon
                            icon={faBell}
                            size="sm"
                            className={styles.icon}
                        />
                    </Link>
                    <Link to="/search">
                        <FontAwesomeIcon
                            icon={faSearch}
                            size="sm"
                            className={styles.icon}
                        />
                    </Link>
                    <Link to="/cart">
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            size="sm"
                            className={styles.icon}
                        />
                    </Link>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
