import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const styles = makeStyles({
    grid: {
        position: 'relative',
        border: 'solid 2px gray',
        borderRadius: '6px',
        display: 'flex'
    },
    title: {
        '@media screen and (min-width: 600px)': {
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
        },
        fontWeight: "bold",
        fontSize: "1.5rem",
        textAlign: "center",
        color: "#222",
        margin: 0
    },
    companyPicture: {
        width: "100%",
    },
    job: {
        position: 'absolute',
        padding: '5px 0px',
        bottom: '0px',
        width: '100%',
        minHeight: '30%',
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
});

const TitledCard = (props) => {

    const classes  = styles();

    return (
        <>
            <Grid container justify="center" item sm={1}>
                <p className={classes.title}>{props.title}</p>
            </Grid>
            <Grid item sm={5} className={classes.grid}>
                <img
                    alt={props.title}
                    className={classes.companyPicture}
                    src={props.image} />
                
                <Grid item className={classes.job}>
                    <p>{props.overlayTitle}</p>
                    <p>{props.overlaySubtitle}</p>
                </Grid>
            </Grid>
        </>
    )
};

export default TitledCard;