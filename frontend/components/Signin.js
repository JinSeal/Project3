import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import Link from 'next/link';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

class Signin extends Component {
  state = {
    username: '',
    password: '',
    email: '',
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(tokenAuth, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await tokenAuth();
              this.setState({ username: '', email: '', password: '' });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign into your account</h2>
              <Error error={error} />
              <label htmlFor="username">
                Username
                <input
                  type="username"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>

              <button type="submit">Sign In!</button>
              <Link href="/signup">
                <a>Signup</a>
              </Link>
              <Link href="/resetpwd">
                <a>Reset Password</a>
              </Link>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signin;
