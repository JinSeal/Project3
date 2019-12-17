import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#F2EFE9',
  offWhite: '#EDEDED',
  darkBlue: '#162231',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: ${props => props.theme.darkBlue};
  color: white;
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0;
`;

injectGlobal`

  @font-face {
    font-family: 'Averia Serif Libre';
    font-style: normal;
    font-weight: 700;
    src: url('../static/averia-serif-libre-v9-latin-700.woff2') format('woff2'); 
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Averia Serif Libre';
    background-color: ${props => props.theme.darkBlue};
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'Averia Serif Libre'; }
`;

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Layout;
