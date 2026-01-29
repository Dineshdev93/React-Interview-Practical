import React, { createContext, useContext, useReducer, type Dispatch } from "react";
import { AppReducer, initialState } from "./reducer";
import type { AppAction, AppInitialState } from "./type";

/** * 1. Create separate contexts for State and Dispatch.
 * Using 'undefined' as the initial value allows us to enforce the use of Providers.
 */
const appStateContext = createContext<AppInitialState | undefined>(undefined);
const appActionContext = createContext<Dispatch<AppAction> | undefined>(undefined);

/**
 * 2. Context Provider Component
 * This wraps the application and provides the global state and dispatch function.
 */
export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    // useReducer manages the complex state logic using the Redux-style reducer
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        /* Providing the Dispatch separately avoids unnecessary re-renders for action-only components */
        <appActionContext.Provider value={dispatch}>
            <appStateContext.Provider value={state}>
                {children}
            </appStateContext.Provider>
        </appActionContext.Provider>
    );
};

/**
 * 3. Custom Hook to access State
 * Ensures the hook is used within the Provider, otherwise throws a helpful error.
 */
export const useStatecontetx = () => {
    const context = useContext(appStateContext);

    if (!context) {
        throw new Error("useStatecontetx must be used within an AppContextProvider");
    }
    return context;
};

/**
 * 4. Custom Hook to access Dispatch
 * Useful for components that only need to trigger actions (like a Button).
 */
export const useDispatchContext = () => {
    const context = useContext(appActionContext);

    if (!context) {
        throw new Error("useDispatchContext must be used within an AppContextProvider");
    }
    return context;
};