import { createContext, useContext, useReducer, ReactNode } from 'react';
import { User } from '../api/User';

type State = {
    user: User;
    token: String;
};

const initialState: State = {
    token: '',
    user: {
        id: '',
        username: '',
        email: '',
        phone: ''
    }
};

type Action =

    | {
        type: 'login';
        payload: State;
    }
    | {
        type: 'logout';
    }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload.user, token: action.payload.token };
        case 'logout':
            return { ...state, user: {} }
        default:
            return state;
    }
}
type AppContextType = State & {
    dispatch: React.Dispatch<Action>;
};
const AppContext = createContext<AppContextType>({
    ...initialState,
    dispatch: () => { },
});

type Props = {
    children: ReactNode;
};
export function AppProvider({ children }: Props) {

    const [{ user, token }, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ user, token, dispatch }} >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);