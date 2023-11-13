// actions
const createActionName = actionName => `app/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// action creators
export const updateSearchstring = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCHSTRING:
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer;