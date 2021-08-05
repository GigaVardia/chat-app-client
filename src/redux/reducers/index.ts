import { combineReducers } from "redux";
import { ThemeReducer } from './Theme/theme.reducer';

export const rootReducer = combineReducers({
    theme: ThemeReducer
})

export type RootState = ReturnType<typeof rootReducer>