import React, { Component } from "react";
import PropTypes from "prop-types";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#F2EFE9",
  offWhite: "#EDEDED",
  darkBlue: "#162231",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: ${props => props.theme.darkBlue};
  color: white;
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0;
`;

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-style: normal;
    font-weight: 700;
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
    background-color: ${props => props.theme.darkBlue};
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Layout extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Layout;
