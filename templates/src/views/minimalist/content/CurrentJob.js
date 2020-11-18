import React from 'react';
import { Grid, withStyles } from '@material-ui/core';

const styles = {
    grid: {
        position: 'relative',
        border: 'solid 2px gray',
        borderRadius: '6px',
        display: 'flex'
    },
    companyPicture: {
        width: "100%",
    },
    job: {
        position: 'absolute',
        padding: '5px 0px',
        bottom: '0px',
        width: '100%',
        minHeight: '25%',
        margin: 0,
        background: 'rgba(0,0,0,0.5)',
        color: 'white',

        '& > p': {
            margin: 0,
            padding: '0rem 1rem',
            fontSize: '0.75rem',
            color: '#CCC'
        },
        '& > p:first-child': {
            fontSize: '1rem',
            color: 'white'
        }
    }
};

const CurrentJob = (props) => {

    const { classes } = props;

    return (
        <Grid item sm={5} className={classes.grid}>
            <img
                className={classes.companyPicture}
                src="https://media-exp1.licdn.com/dms/image/C560BAQFAwMkfPnYR-g/company-logo_200_200/0?e=1613606400&v=beta&t=qKigYfEUdyaae2xCleg7ERAQ1x7v852K7KU2gFdnEFg" />
            
            <Grid item className={classes.job}>
                <p>Software Application Developer</p>
                <p>I-Sight Software by Customer Expressions</p>
            </Grid>
        </Grid>
    )
};

export default withStyles(styles)(CurrentJob);