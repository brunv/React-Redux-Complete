import { useEffect, useState } from 'react';
import axios from 'axios';

// custom hook:
const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

                setResources(response.data);
            })(resource);
        },
        [resource]
    );

    return resources;
};

export default useResources;