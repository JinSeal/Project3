import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 1em;
    background: none;
    cursor: pointer;
    color: white;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:after {
      height: 2px;
      background: white;
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }

  @media (max-width: 1300px) {
    border-top: 1px solid white;
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`

const Nav = props => (
  <NavStyles>
    <a onClick={() => props.openDrawer()}>Meet the Cats</a>
    <Link href="/donation">
      <a>Donation</a>
    </Link>
  </NavStyles>
)

export default Nav
