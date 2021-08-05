
import { ThemeAction, ThemeActionTypes, ThemeTypes } from '../../../types/store/Theme.types';

const initialState: ThemeTypes = {
    theme: 'light'
}

export const ThemeReducer = ( state = initialState, action: ThemeAction): ThemeTypes => {
    switch (action.type) {
        case ThemeActionTypes.SET_THEME:
            return { theme: action.payload }
        default:
            return state
    }
}