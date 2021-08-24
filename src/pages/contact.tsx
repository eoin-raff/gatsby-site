import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core'
import React, {FC} from 'react'
import { IHero } from '../components/Hero'
import Layout from '../components/layout'
import Section from '../components/Section'

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
        form:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        },
        input:{
            marginBottom: '8px',
            marginTop: '8px'
        }
    }
})

const Contact: FC = () => {
    const classes=useStyles()
    const heroProps:IHero = {
        title: "Contact"
    }
    return (
        <Layout>
            <Section>
                <Typography variant="h2">Write a message</Typography>
                <Typography>I'll try to respond as soon as possible</Typography>
                <form className={classes.form} onSubmit={()=>{alert("SENDING FORM")}}>
                    <TextField fullWidth className={classes.input} variant="outlined" label="Name"/>
                    <TextField fullWidth className={classes.input} variant="outlined" label="Email"/>
                    <TextField fullWidth className={classes.input} variant="outlined" label="Message" multiline rows={4}/>
                    <Button variant="contained" type="submit">Send</Button>
                </form>
            </Section>
        </Layout>
    )
}

export default Contact