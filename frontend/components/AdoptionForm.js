import React, { Component } from 'react';
import gql from 'graphql-tag';
import { FormField, Button, Heading, Combobox } from 'evergreen-ui';
import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import _ from 'underscore';
import { ALL_CATS_QUERY } from './DonationForm'

const Styles = styled.div`
    background-color: white;
    padding: 2rem 5rem;
`;


const CREATE_ADOPTION_MUTATION = gql`
    mutation CREATE_ADOPTION_MUTATION(
        $catId: Int!
    ){ 
        createAdoption(catId: $catId)
            {
                adoption{
                    id
                }
            }
      }
`;

class AdoptionForm extends Component {
    state = {
        catId: null,
        name: '',
        image: "static/image/stripe.jpg"
    };


    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Query query={ALL_CATS_QUERY}>
                {({ data }) => {
                    const catsName = _.pluck(data.allCats, "name")
                    let cat = _.where(data.allCats, { name: this.state.cat })[0]
                    let image = cat ? cat.image : this.state.image
                    return (
                        <Styles>
                            <FormField>
                                <Heading size={500} marginTop="default">Allocation</Heading>
                                <Combobox
                                    name="allocation"
                                    openOnFocus
                                    width={400}
                                    items={catsName}
                                    onChange={selected => {
                                        this.setState({
                                            name: selected,
                                            catId: _.where(data.allCats, { name: selected })[0].id,
                                            image: _.where(data.allCats, { name: selected })[0].image
                                        })
                                    }}
                                    placeholder="Select a Cat"
                                />
                                <div style={{ height: '200px' }}>
                                    <img style={{ height: "100%", borderRadius: "50%", margin: '3rem' }} src={image} alt="cat photo" />
                                </div>
                                <Mutation
                                    mutation={CREATE_ADOPTION_MUTATION}
                                    variables={{
                                        catId: this.state.catId
                                    }}
                                >
                                    {(createAdoption) => (
                                        <Button onClick={createAdoption} height={50} marginTop={50} appearance="primary" intent="success" >Adopt</Button>
                                    )}
                                </Mutation>
                            </FormField>
                        </Styles >
                    )
                }}
            </Query>

        );
    }
}

export default AdoptionForm;
