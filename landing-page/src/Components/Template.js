import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {

    templateCard: {
        maxWidth: '256px',
        margin: '16px'
    },
};

class Template extends React.Component  {

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.templateCard}>
                    <CardMedia> <img src={this.props.image} alt={''} width="96px" height="96px"/> </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </Card>
                <FormControlLabel value={this.props.value} control={<Radio color="primary"/>} label={this.props.value}/>
            </div>
        );
    }
}
  
export default withStyles(styles)(Template);