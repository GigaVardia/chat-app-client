import { ThemeAction, ThemeActionTypes } from "../../types/store/Theme.types"

const setThemeAction = (payload: 'dark' | 'light'): ThemeAction => {
    return {
        type: ThemeActionTypes.SET_THEME,
        payload
    }
}

export { setThemeAction }