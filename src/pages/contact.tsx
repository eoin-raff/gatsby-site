import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core'
import React, {FC} from 'react'
import { IHero } from '../components/Hero'
import Layout from '../components/layout'

const useStyles=makeStyles(()=>{
    return {
        root:{},
        form:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    }
})

const Contact: FC = () => {
    const classes=useStyles()
    const heroProps:IHero = {
        title: "Contact"
    }
    return (
        <Layout hero={heroProps}>
            <Box>
                <Container>
                <Typography variant="h2">Write a message</Typography>
                <Typography>I'll try to respond as soon as possible</Typography>
                <form className={classes.form}>
                    <TextField variant="outlined" label="Name"/>
                    <TextField variant="outlined" label="Email"/>
                    <TextField variant="outlined" label="Phone Number"/>
                    <TextField variant="outlined" label="Message" multiline rows={4}/>
                    <Button variant="contained" type="submit">Send</Button>
                </form>
                </Container>
            </Box>
        </Layout>
    )
}

export default Contact