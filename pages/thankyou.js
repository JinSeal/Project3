import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Message = styled.div`
  margin: 10em auto;
  text-align: center;
`;

const Text = styled.h1`
  color: white;

  a {
    color: white;
    text-decoration: underline;
  }
`;

const ThankYou = props => (
  <Message>
    <h1>Thank you for your gift to Free Spirits.</h1>
    <Text>
      You will receive an email soon. <a href="/"> Back to Homepage</a>{" "}
    </Text>
  </Message>
);

export default ThankYou;
