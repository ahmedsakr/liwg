import React from 'react';
import { Card, Grid, CardMedia, withStyles } from '@material-ui/core';

const styles = {
    profilePicture: {
        width: "200px",
        height: "200px"
    },
    profileName: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
        '& > *': {
            margin: 0
        },
        '& > h1': {
            fontWeight: 'bold',
            fontSize: "3rem"
        },
        '& > p': {
            fontSize: '1rem',
            color: 'gray'
        }
    }
}

const Profile = (props) => {

    const { classes } = props;

    return (
        <Card>
            <Grid container>
                <CardMedia
                    className={classes.profilePicture}
                    image={props.picture} />
                <Grid item className={classes.profileName}>
                    <h1>{props.firstName}</h1>
                    <p>{props.lastName}</p>
                </Grid>
            </Grid>   
        </Card>
    );
}

export default withStyles(styles)(Profile);