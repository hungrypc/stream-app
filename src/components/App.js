import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StreamCreate from './StreamCreate';
import StreamEdit from './StreamEdit';
import StreamDelete from './StreamDelete';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import NavBar from './NavBar';


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="ui container">
                <Switch>
                    <Route path="/" component={StreamList} exact />
                    <Route path="/streams/new" component={StreamCreate} exact />
                    <Route path="/streams/edit" component={StreamEdit} exact />
                    <Route path="/streams/delete" component={StreamDelete} exact />
                    <Route path="/streams/show" component={StreamShow} exact />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;