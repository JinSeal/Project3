import React from 'react'
import DonationForm from '../components/DonationForm'
import styled from 'styled-components'

const Styles = styled.div`
  padding: 10rem;
  background-color: ${props => props.theme.lightgrey};
  display: flex;
  justify-content: center;
`
const Donation = props => (
  <Styles>
    <img src="/image/cubs2.jpeg" />
    <DonationForm />
  </Styles>
)

export default Donation
