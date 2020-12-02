import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({

    templateCard: {
        maxWidth: '256px',
        margin: '16px'
    },
});

const Template = (props) =>  {

    const classes = styles();

    return (
        <div>
            <Card className={classes.templateCard}>
                <CardMedia> <img src={props.image} alt={''} width="96px" height="96px"/> </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" href={"/example?template=" + props.value} target="_blank">Example</Button>
                </CardActions>
            </Card>
            <FormControlLabel value={props.value} control={<Radio color="primary"/>} label={props.value}/>
        </div>
    );

}
  
export default Template;