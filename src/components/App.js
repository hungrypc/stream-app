import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './StreamCreate';
import StreamEdit from './StreamEdit';
import StreamDelete from './StreamDelete';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import NavBar from './NavBar';

import history from '../history';


const App = () => {
    return (
        // using Router instead of BrowserRouter to be able to use history
        <Router history={history}>
            <NavBar />
            <div className="ui container">
                {/* Switch prevents clashing components */}
                <Switch>
                    <Route path="/" component={StreamList} exact />
                    <Route path="/streams/new" component={StreamCreate} exact />
                    <Route path="/streams/edit/:id" component={StreamEdit} exact />
                    <Route path="/streams/delete/:id" component={StreamDelete} exact />
                    <Route path="/streams/:id" component={StreamShow} exact />
                </Switch>
            </div>
        </Router>
    );
};

export default App;