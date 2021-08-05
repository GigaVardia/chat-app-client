export interface ThemeTypes {
    theme: 'dark' | 'light'
}

export enum ThemeActionTypes {
    SET_THEME = "SET_THEME"
}

interface SetThemeAction {
    type: ThemeActionTypes.SET_THEME,
    payload: 'dark' | 'light'
}

export type ThemeAction = SetThemeAction