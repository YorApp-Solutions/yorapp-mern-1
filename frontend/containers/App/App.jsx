import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';

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
                    </Switch>
                </main>
            </Fragment>
        );
    }
}

export default App;
