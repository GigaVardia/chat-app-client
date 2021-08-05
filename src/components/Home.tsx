import { Button, Checkbox } from '@material-ui/core'
import React, { FC } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from './../hooks/useTypedSelector';

export const Home:FC = () => {
    const { setThemeAction } = useActions()
    const { theme } = useTypedSelector(state => state.theme)

    const changeTheme = () => {
        setThemeAction(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div>
            Home
            <Button onClick={changeTheme}>
                Click Me!
            </Button>
            <Checkbox defaultChecked/>
        </div>
    )
}
