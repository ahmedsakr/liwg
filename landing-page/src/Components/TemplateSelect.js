import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Template from './Template';
import logo from './../images/liwg-logo-200x200.png'
import { Button } from '@material-ui/core';
import { FaLinkedin } from 'react-icons/fa';

class TemplateSelect extends React.Component  {

    state = {
        selectedTemplate : 0
    }

    render() {

        return (
            <div>
                <h2>Templates</h2>

                <FormControl component="fieldset">
                    <RadioGroup row onChange={(event) => this.handleChange(event)}>
                        <Template 
                            value="1" 
                            name="Template 1" 
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

                <Button variant="contained" color="primary" startIcon={<FaLinkedin/>} href={"/generate?template=" + this.state.selectedTemplate}>Generate Website</Button>
            </div>

        );
    }

    handleChange(event){
        this.setState({selectedTemplate : parseInt(event.target.value)});
    }

}
  
export default TemplateSelect;