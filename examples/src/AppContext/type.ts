
export interface themepreview {
    themeview : string
}

export const SET_THEME_VIEW = "SET_THEME_VIEW"

export interface SetthemeViewAction { 
     type : typeof SET_THEME_VIEW,
     payload : string
}

export type AppAction = 
 | SetthemeViewAction

 export interface AppInitialState {
     themeState  : themepreview
 }