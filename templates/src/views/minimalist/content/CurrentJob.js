import React from 'react';
import { Card, Grid, CardMedia, withStyles } from '@material-ui/core';

const styles = {
    profilePicture: {
        width: "200px",
        height: "200px"
    },
};

const CurrentJob = (props) => {

    const { classes } = props;

    return (
        <Grid container md={6}>
            <Card>
            <CardMedia
                    className={classes.profilePicture}
                    image="https://media-exp1.licdn.com/dms/image/C560BAQFAwMkfPnYR-g/company-logo_200_200/0?e=1613606400&v=beta&t=qKigYfEUdyaae2xCleg7ERAQ1x7v852K7KU2gFdnEFg" />
            </Card>
        </Grid>
    )
};

export default withStyles(styles)(CurrentJob);