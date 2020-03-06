import React, { Fragment } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';
import StoreLoadout from '../StoreLoadout/StoreLoadout.jsx';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Fragment>
                <Header />
                <main>
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
