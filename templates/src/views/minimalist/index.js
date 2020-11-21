import React from 'react';
import Profile from './content/Profile';
import { Grid, withStyles, Divider, Hidden } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';
import CurrentJob from './content/CurrentJob';
import Education from './content/Education';

const styles = {
    root: {
        minHeight: "100vh",
        backgroundColor: '#f0f0f0'
    },
    sideContent: {
        backgroundColor: '#242424',
        color: 'white',
        textAlign: 'center',
        '& > h1': {
            margin: 0
        },
        '& > h3': {
            fontWeight: 'normal',
            margin: 0,
            marginBottom: '1rem'
        },
        '& > p': {
            border: "solid 1px white",
            borderRadius: "6px",
            color: 'white',
            background: "#404040",
            fontSize: "0.8rem",
            padding: "5px",
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        }
    },
    content: {
        padding: '1rem',
        borderRadius: '10px',
        marginLeft: '8.3%'
    },
    divider: {
        margin: "20px 0px",
        background: "#222"
    }
}

const Minimalist = (props) => {

    const { classes } = props;

    return (
        <>
            <Grid container className={classes.root}>
                <Hidden smDown>
                    <Grid container direction="column" alignItems="center" justify="center" sm={4} className={classes.sideContent}>
                        <h1>Thanks for dropping by.</h1>
                        <h3>Let's get to know each other.</h3>
                        <p>Connect on LinkedIn <LinkedIn  /></p>
                    </Grid>
                </Hidden>

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