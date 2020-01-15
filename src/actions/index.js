import streams from '../apis/streams';
import history from '../history';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM, 
    FETCH_STREAM, 
    FETCH_STREAMS, 
    DELETE_STREAM,
    EDIT_STREAM
} from './types';

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
    return async (dispatch, getState) => {
        const { userId } = getState().auth; // because auth is already in state
        // combining formValues and userId into a single obj to assoc stream to user
        const response = await streams.post('/streams', { ...formValues, userId });
        dispatch({ 
            type: CREATE_STREAM,
            payload: response.data
        })
        // programmatic navigation to get user back to root
        history.push('/');
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({
            type: FETCH_STREAMS,
            payload: response.data
        });
    };
};

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({
            type: FETCH_STREAM,
            payload: response.data
        });
    };
};

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        // put requests updates ALL properties of a record
        // const response = await streams.put(`/streams/${id}`, formValues);

        // patch request updates SOME properties of a record
        const response = await streams.patch(`/streams/${id}`, formValues);
        dispatch({
            type: EDIT_STREAM,
            payload: response.data
        });
        history.push('/');
    };
};

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);
        dispatch({
            type: DELETE_STREAM,
            payload: id
        });
    };
};

