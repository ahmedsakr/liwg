import React from 'react';
import Profile from './content/Profile';
import { Grid, withStyles, Divider } from '@material-ui/core';
import CurrentJob from './content/CurrentJob';

const styles = {
    root: {
        minHeight: "100vh",
        padding: "2em",
        backgroundColor: 'white'
    },
    content: {
        backgroundColor: '#404040',
        padding: '1rem',
        borderRadius: '10px'
    },
    divider: {
        margin: "10px 0px",
        background: 'white'
    }
}

const Minimalist = (props) => {

    const { classes } = props;

    return (
        <>
            <Grid container justify="center" className={classes.root}>
                <Grid container direction="column" sm={8} md={6} className={classes.content}>
                    <Profile />

                    <Divider className={classes.divider} /> 

                    <CurrentJob />
                </Grid>
            </Grid>
        </>
    )
};

export default withStyles(styles)(Minimalist);