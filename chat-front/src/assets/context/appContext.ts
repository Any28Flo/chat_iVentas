// CountContext.js
import React, { createContext, useReducer, useContext, Dispatch } from 'react';

type User = {
    email: string
    username: string
}

interface State {
    user: User | {};
}
type Action = { type: 'LOG_IN', payload: { user: User } };

const initialState: State = { user: {} };


const appReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOG_IN':
            return { user: action.payload };
        default:
            return state;
    }
};

const AppContext = createContext<{
    state: State;
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => { },
});


const AppProvider: JSX.Element = ({ children: any }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value= {{ state, dispatch }
}>
    { children }
    < /AppContext.Provider>
      );

}


export { AppContext, AppProvider };
