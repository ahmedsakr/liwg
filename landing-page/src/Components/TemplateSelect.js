import React, { useState } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Template from './Template';
import logo from './../images/liwg-logo-200x200.png'
import { Button } from '@material-ui/core';
import { FaLinkedin } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({

    Button: {
        display: 'flex',
        width: '250px',
        marginLeft: 'auto',
        marginRight: 'auto'      
    },

    Container: {
        padding: '16px',
    },

    Title: {
        color: '#524dff',
        textShadow: '1px 1px 4px #347deb'      
    }
});

const TemplateSelect = (props) =>  {

    const classes = styles();
    const [selectedTemplate, selectTemplate] = useState(0);

    const handleChange = (event) => {
         selectTemplate(parseInt(event.target.value));
    }

    return (
        <div className={classes.Container}>
            <h1 className={classes.Title}>Templates</h1>

            <FormControl component="fieldset">
                <RadioGroup row onChange={(event) => handleChange(event)}>
                    <Template 
                        value="1" 
                        name="Minimalist" 
                        image={logo}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie eleifend quam nec fermentum."
                    />
                    <Template 
                        value="2" 
                        name="Template 2" 
                        image={logo}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie eleifend quam nec fermentum."
                    />
                    <Template 
                        value="3" 
                        name="Template 3"
                        image={logo}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie eleifend quam nec fermentum."
                    />
                </RadioGroup>
            </FormControl>

            <Button className={classes.Button} variant="contained" color="primary" startIcon={<FaLinkedin/>} href={"/generate?template=" + selectedTemplate}>Generate Website</Button>              
        </div>
    );
}
  
export default TemplateSelect;