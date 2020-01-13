import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StreamCreate from './StreamCreate';
import StreamEdit from './StreamEdit';
import StreamDelete from './StreamDelete';
import StreamList from './StreamList';
import StreamShow from './StreamShow';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={StreamList} exact />
                    <Route path="/new" component={StreamCreate} exact />
                    <Route path="/edit" component={StreamEdit} exact />
                    <Route path="/delete" component={StreamDelete} exact />
                    <Route path="/show" component={StreamShow} exact />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;