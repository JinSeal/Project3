import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { Autocomplete } from 'evergreen-ui';


class DonationForm extends Component {
    state = {
        name: '',
        password: '',
        email: '',
    };
    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <>
            </>
        );
    }
}

export default DonationForm;
