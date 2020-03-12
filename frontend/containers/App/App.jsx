import React, { Fragment } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';
import StoreLoadout from '../StoreLoadout/StoreLoadout.jsx';
import styles from './app.css';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Fragment>
                <Header />
                <main className={styles.main}>
                    <Switch>
                        <Route exact path="/">
                            <LandingPage />
                        </Route>
                        <Route
                            path="/stores/:id"
                            component={StoreLoadout}></Route>
                    </Switch>
                </main>
            </Fragment>
        );
    }
}

export default App;
