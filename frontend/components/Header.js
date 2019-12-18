import Link from 'next/link';
import React, { useState } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';
import LogoStyles from './styles/LogoStyles';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import NavCat from './NavCat';
import gql from 'graphql-tag';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};


const HeaderStyles = styled.header`
.bar {
	background: #162231;
	color: white;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-content: space-between;
	align-items: stretch;
	@media (max-width: 1300px) {
		grid-template-columns: 1fr;
		justify-content: center;
  }
}
`;

const CatList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  text-align: center;
  margin-bottom: 2rem;
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

const Drawer = styled.div`
    display: ${props => props.open ? "flex" : "none"};
    justify-content: center;
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = e => {
    setOpen(!open)
  }

  return (
    <HeaderStyles>
      <div className="bar">
        <LogoStyles>
          <Link href="/">
            <a href="/">Free Spirits</a>
          </Link>
        </LogoStyles>
        <Nav openDrawer={openDrawer} />
      </div>
      <Drawer open={open}>
        <Query query={ALL_CATS_QUERY} >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            console.log(data);

            return (
              <CatList>{data.allCats.map(cat => <NavCat openDrawer={openDrawer} cat={cat} key={cat.id} />)}</CatList>
            );
          }}
        </Query>
      </Drawer>
    </HeaderStyles>
  )
};

export default Header;
