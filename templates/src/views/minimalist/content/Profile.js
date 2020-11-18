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
                    image="https://media-exp1.licdn.com/dms/image/C5603AQGfC_pH2J7Czg/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=_iFEKj1Ees47yb42OGO2xPBITQT1fE6J8rsCNiVyHNs" />
                <Grid item direction="column" className={classes.profileName}>
                    <h1>Josh</h1>
                    <p>Campitelli</p>
                </Grid>
            </Grid>   
        </Card>
    );
}

export default withStyles(styles)(Profile);