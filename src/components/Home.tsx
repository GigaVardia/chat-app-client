import { Button, Checkbox } from '@material-ui/core'
import React, { FC } from 'react'

export const Home:FC = () => {
    return (
        <div>
            Home
            <Button>
                Click Me!
            </Button>
            <Checkbox defaultChecked/>
        </div>
    )
}
