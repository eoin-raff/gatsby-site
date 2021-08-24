import { Box, Container, makeStyles } from '@material-ui/core'
import React, {FC} from 'react'

const useStyles=makeStyles(()=>{
    return {
        root:{
            height: '100vh',
            display: 'flex'
        },
        container:{
            display:'flex',
            flexDirection: 'column',
            justifyContent:'center'
        },
    }
})

export const Section: FC = ({children}) => {
    const classes=useStyles()

    return (
            <Box component="section" className={classes.root}> 
                <Container className={classes.container} maxWidth='md'>
                    {children}
                </Container>
            </Box>
    )
}

