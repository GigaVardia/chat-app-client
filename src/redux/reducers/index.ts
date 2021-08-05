import { combineReducers } from "redux";
import { ThemeReducer } from './theme.reducer';

export const rootReducer = combineReducers({
    theme: ThemeReducer
})

export type RootState = ReturnType<typeof rootReducer>