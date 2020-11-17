import React from 'react';
import { Card, Grid } from '@material-ui/core';

const Profile = (props) => {

    return (
        <Grid container justify="center">
            <Grid item>
                <Card lg="8">
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C5603AQGfC_pH2J7Czg/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=_iFEKj1Ees47yb42OGO2xPBITQT1fE6J8rsCNiVyHNs"
                            width="140px"
                            height="auto" />
                </Card>
            </Grid>
        </Grid>

    );
}

export default Profile;