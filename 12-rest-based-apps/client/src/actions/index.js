import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from "./types";

/** ACTION CREATORS: **/

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = (formValues) => {
    return async (dispath) => {
        // Making a POST request with axios:
        streams.post('/streams', formValues);
    };
};