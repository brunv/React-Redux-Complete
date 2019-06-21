import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;

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
