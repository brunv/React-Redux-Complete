import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            PageOne <br />
            <Link to="/pagetwo">Page Two >></Link>
        </div>
    );
};

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

const PageTwo = () => {
    return (
        <div>
            PageTwo <br />
            <Link to="/">Page One</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

/**
 * The 'exact' prop in the Route component means that React has to
 * match the exact path in the route.
 * Example:
 * path='/page' and path='/page/2' are both matched if you enter '/page'
 * in the URL so they're both shown in the page. To avoid that we use
 * the 'exact' property.
 * 
 * Anytime you list out just a property name you're actually passing
 * it like property={true} to its component.
 */

export default App;