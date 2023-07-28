import { createContext, useContext, useReducer, ReactNode } from 'react';
import { User } from '../api/User';

type State = {
    user: undefined | User | {};
    loading: boolean;
};

const initialState: State = {
    user: undefined,
    loading: false,
};

type Action =
    | {
        type: 'authenticate';
    }
    | {
        type: 'authenticated';
        payload: User | undefined;
    }
    | {
        type: 'logout';
    }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'authenticate':
            return { ...state, loading: true };
        case 'authenticated':
            return { ...state, loading: false, user: action.user };
        case 'logout':
            return { ...state, loading: false, user: {} }
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

    const [{ user, loading }, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ user, loading, dispatch }} >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);