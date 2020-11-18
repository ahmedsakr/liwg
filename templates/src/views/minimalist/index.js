import React from 'react';
import Profile from './content/Profile';
import { Grid, withStyles } from '@material-ui/core';
import CurrentJob from './content/CurrentJob';

const styles = {
    root: {
        minHeight: "100vh",
        padding: "2em"
    }
}

const Minimalist = (props) => {

    const { classes } = props;

    return (
        <>
            <Grid container justify="center" className={classes.root}>
                <Grid container direction="column" md={6}>
                    <Profile />
                    <CurrentJob />
                </Grid>
            </Grid>
        </>
    )
};

export default withStyles(styles)(Minimalist);