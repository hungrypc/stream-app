import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NestedBrowserRouter from 'nested-browser-router';

import StreamCreate from './StreamCreate';
import StreamEdit from './StreamEdit';
import StreamDelete from './StreamDelete';
import StreamList from './StreamList';
import StreamShow from './StreamShow';


const App = () => {
    return (
        <div className="ui container">
            Stream
            <NestedBrowserRouter basename="stream">
                <div>
                    <Switch>
                        <Route path="/streams" component={StreamList} exact />
                        <Route path="/new" component={StreamCreate} exact />
                        <Route path="/edit" component={StreamEdit} exact />
                        <Route path="/delete" component={StreamDelete} exact />
                        <Route path="/show" component={StreamShow} exact />
                    </Switch>
                </div>
            </NestedBrowserRouter>


        </div>
    );
};

export default App;