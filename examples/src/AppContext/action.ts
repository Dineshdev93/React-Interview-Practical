
import { SET_THEME_VIEW, type SetthemeViewAction, type themepreview } from "./type";

export const setThemeview = (theme : string) : SetthemeViewAction => {
    return {
         type : SET_THEME_VIEW ,
         payload : theme 
    }
}