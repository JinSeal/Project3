import React, { Component } from "react";
import gql from "graphql-tag";
import {
  FormField,
  TextInputField,
  Autocomplete,
  TextInput,
  Checkbox,
  Button,
  Heading,
  Combobox
} from "evergreen-ui";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { Query } from "react-apollo";
import _ from "underscore";

const Styles = styled.div`
  background-color: white;
  padding: 2rem 5rem;
`;

const ALL_CATS_QUERY = gql`
  query ALL_CATS_QUERY {
    allCats {
      id
      name
      image
      iucnStatus
    }
  }
`;

class DonationForm extends Component {
  state = {
    email: "",
    updates: false,
    gift: this.props.amount || null,
    allocation: ""
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onToken = async res => {
  //   NProgress.start();
  //   await createDonation({
  //     variables: {
  //       token: res.id
  //     }
  //   }).catch(err => {
  //     alert(err.message);
  //   });
  //   Router.push({
  //     pathname: "/thankyou"
  //   });
  // };

  render() {
    return (
      <Query query={ALL_CATS_QUERY}>
        {({ data }) => {
          const catsName = _.pluck(data.allCats, "name");
          let cat = _.where(data.allCats, { name: this.state.allocation })[0];
          let image = cat ? cat.image : "/image/stripe.jpg";
          return (
            <Styles>
              <FormField>
                <Heading size={500} marginTop="default">
                  Gift Amount *
                </Heading>
                <Autocomplete
                  height={50}
                  items={[25.0, 50.0, 100.0, 200.0, 500.0]}
                  onChange={changedItem => this.setState({ gift: changedItem })}
                  initialInputValue={this.state.gift}
                >
                  {props => {
                    const {
                      getInputProps,
                      getRef,
                      inputValue,
                      openMenu
                    } = props;
                    return (
                      <TextInput
                        placeholder="Choose or Enter an Amount"
                        width={400}
                        value={inputValue}
                        innerRef={getRef}
                        label="Gift Amount"
                        {...getInputProps({
                          onFocus: () => {
                            openMenu();
                          }
                        })}
                      />
                    );
                  }}
                </Autocomplete>
                <Heading size={500} marginTop="default">
                  Allocation
                </Heading>
                <Combobox
                  name="allocation"
                  openOnFocus
                  width={400}
                  items={[...catsName, "All Cats"]}
                  onChange={selected => this.setState({ allocation: selected })}
                  placeholder="Select a Cat"
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    name="updates"
                    checked={this.state.update}
                    onChange={e => this.setState({ update: e.target.checked })}
                  />
                  <Heading size={500} marginTop={0} marginLeft={10}>
                    Keep me updated on Free Spirits news
                  </Heading>
                </div>
                <StripeCheckout
                  amount={this.state.gift * 100}
                  name="Free Spirits"
                  description={`Donate to save wild cats`}
                  image={image}
                  stripeKey="pk_test_KiZyYKiQtlmrqhtoGEbkdtuR00es4lCEgx"
                  currency="AUD"
                  // token={res => this.onToken(res)}
                  bitcoin={true}
                >
                  <Button
                    height={50}
                    marginTop={30}
                    appearance="primary"
                    intent="success"
                  >
                    Complete this Transaction
                  </Button>
                </StripeCheckout>
              </FormField>
            </Styles>
          );
        }}
      </Query>
    );
  }
}

export default DonationForm;
export { ALL_CATS_QUERY };
