import { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
    isLogin: false,
    user: {},
};

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "USER_SUCCESS":
        case "LOGIN_SUCCESS":
            sessionStorage.setItem("token", payload.token)
            return {
                ...state,
                isLogin: true,
                user: payload
            };
        case "AUTH_ERROR":
        case "LOGOUT":
            sessionStorage.removeItem("token")
            return {
                ...state,
                isLogin: false,
                user: {}
            };
        default:
            throw new Error();
    }
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    );
};
