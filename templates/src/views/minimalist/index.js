import React from 'react';
import Profile from './content/Profile';
import { Grid, makeStyles, Divider, Hidden } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';
import TitledCard from '../../components/container/TitledCard';

const styles = makeStyles({
    root: {
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
    },
    sideContent: {
        backgroundColor: '#242424',
        color: 'white',
        textAlign: 'center',
        '& > h1': {
            margin: 0,
        },
        '& > h3': {
            fontWeight: 'normal',
            margin: 0,
            marginBottom: '1rem',
        },
        '& > p': {
            border: 'solid 1px white',
            borderRadius: '6px',
            color: 'white',
            background: '#404040',
            fontSize: '0.8rem',
            padding: '5px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
        },
    },
    content: {
        padding: '1rem',
        borderRadius: '10px',
        marginLeft: '8.3%',
    },
    divider: {
        margin: '20px 0px',
        background: '#222',
    },
});

const Minimalist = () => {
    const classes = styles();

    return (
        <>
            <Grid container className={classes.root}>
                <Hidden smDown>
                    <Grid
                        item
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                        sm={4}
                        className={classes.sideContent}
                    >
                        <h1>Thanks for dropping by.</h1>
                        <h3>Let's get to know each other.</h3>
                        <p>
                            Connect on LinkedIn <LinkedIn />
                        </p>
                    </Grid>
                </Hidden>

                <Grid
                    item
                    container
                    direction="column"
                    justify="center"
                    sm={8}
                    md={6}
                    className={classes.content}
                >
                    <Profile
                        firstName="{{ person.firstName }}"
                        lastName="{{ person.lastName }}"
                        picture="{{ person.profilePicture }}"
                    />

                    <Divider className={classes.divider} />

                    <Grid container item>
                        <TitledCard
                            title="CURRENT JOB"
                            image="{{ person.job.companyPicture }}"
                            overlayTitle="{{ person.job.title }}"
                            overlaySubtitle="{{ person.job.companyName }}"
                        />
                        <TitledCard
                            title="EDUCATION"
                            image="{{ person.education.institutePicture }}"
                            overlayTitle="{{ person.education.degreeTitle }}"
                            overlaySubtitle="{{ person.education.instituteName }}"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Minimalist;
