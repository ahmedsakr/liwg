import React from 'react';
import Profile from './content/Profile';
import { Grid, withStyles, Divider } from '@material-ui/core';
import CurrentJob from './content/CurrentJob';
import Education from './content/Education';

const styles = {
    root: {
        minHeight: "100vh",
        padding: "2em",
        backgroundColor: '#222'
    },
    content: {
        padding: '1rem',
        borderRadius: '10px'
    },
    divider: {
        margin: "20px 0px",
        background: "white"
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

                    <Grid container item>
                        <CurrentJob />
                        <Education />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default withStyles(styles)(Minimalist);