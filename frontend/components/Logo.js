import styled from 'styled-components'

const LogoStyles = styled.h1`
  font-size: 4rem;
  margin: 1rem 2rem;
  position: relative;
  z-index: 2;
  background-image: url("/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  a {
    padding-left: 9ex;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
    background-position: center;
    a {
      padding-left: 0;
    }
  }
`

export default LogoStyles
