import { Form } from 'react-bootstrap';
//import React, { PureComponent } from 'react';
import { registerComponent } from 'meteor/vulcan:core';

/*
class Form extends PureComponent {

    render () {
        return (<form>{childen}</form>)
    }
}
*/
registerComponent('FormElement', Form);