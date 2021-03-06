import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;

/**
 * React Switch:
 * Works as a switch() in general programming, it's only going to show one
 * Route for any path that we go.
 */

/**
 * <a href="/pagetwo">Two ></a>
 *
 * Why we don't use <a> in react-router?
 * When you click on an anchor tag your browser makes a request to the server.
 * Then the server responds with the .html file that is rendered in the browser.
 * But every time the browser renders a new HTML file it dumps all variables in
 * memory, all javascript data of the gets entirely wiped.
 * So after the browser loads up the new file it's going to start up our
 * application a second time.
 *
 * What we do then?
 * We use Link from react-router-dom.
 * That way React Router prevents the browser from navigating to the new page
 * and fetching new HTML file. But the URL still change and the Route components
 * rerender to show new set of components!
 *
 * This is kinda obvious if you understand how a Single Page Application works.
 */
