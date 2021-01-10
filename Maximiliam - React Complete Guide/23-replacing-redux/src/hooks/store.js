import { useState, useEffect } from 'react';

/**
 * Now we will share logic and data by managing the data outside off the hook.
 */
let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
    // const setState = useState(globalState)[1];
    const [_, setState] = useState(globalState);

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
        }
    };

    useEffect(() => {
        if (shouldListen) {
            listeners.push(setState);
        }

        // Removes the listener when unmounting:
        return () => {
            if (shouldListen) {
                listeners = listeners.filter(li => li !== setState);
            }
        }
    }, [setState, shouldListen]);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }

    actions = { ...actions, ...userActions };
};