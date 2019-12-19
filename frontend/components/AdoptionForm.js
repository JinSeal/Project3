import React, { Component } from 'react';
import gql from 'graphql-tag';
import { FormField, Button, Heading, Combobox } from 'evergreen-ui';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import _ from 'underscore';

const Styles = styled.div`
    background-color: white;
    padding: 2rem 5rem;
`;


const ALL_CATS_QUERY = gql`
  query ALL_CATS_QUERY{
    allCats{
      id
      name
      image
      iucnStatus
    }
  }
`;

class AdoptionForm extends Component {
    state = {
        name: '',
        image: "static/image/stripe.jpg"
    };


    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onToken = async (res, createOrder) => {
        NProgress.start();
        await createDonation({
            variables: {
                token: res.id,
            },
        }).catch(err => {
            alert(err.message);
        });
        Router.push({
            pathname: '/thankyou',
        });
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
                                            image: _.where(data.allCats, { name: selected })[0].image
                                        })
                                    }}
                                    placeholder="Select a Cat"
                                />
                                <div style={{ height: '200px' }}>
                                    <img style={{ height: "100%", borderRadius: "50%", margin: '3rem' }} src={image} alt="cat photo" />
                                </div>
                                <Button height={50} marginTop={50} appearance="primary" intent="success" >Adopt</Button>
                            </FormField>
                        </Styles >
                    )
                }}
            </Query>

        );
    }
}

export default AdoptionForm;
