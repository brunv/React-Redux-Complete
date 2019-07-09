import React, { useState } from 'react';
import ResourceList from './ResourceList';

// class App {
//     state = {
//         resource: 'posts',
//         count: 0
//     };
// }

// Function-Based Component:
const App = () => {

    // Array destructuring:
    const [resource, setResource] = useState('posts');
    // const [currentCount, setCount] = useState(0);

    return (
        <div>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
}

export default App;