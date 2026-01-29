import { SET_THEME_VIEW, type AppInitialState } from "./type";
import type { AppAction } from "./type";

export const initialState: AppInitialState = {
  themeState: { themeview: "dark" },
};

export const AppReducer = (
  state: AppInitialState = initialState,
  action: AppAction,
): AppInitialState => {
  switch (action.type) {
    case SET_THEME_VIEW:
      return {
        ...state,
        themeState : {themeview : action.payload},
      };
    default:
      return state;
  }
};
