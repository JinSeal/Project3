import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';
import LogoStyles from './styles/LogoStyles';
import styled from 'styled-components';


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

const Header = () => (
  <HeaderStyles>
    <div className="bar">
      <LogoStyles>
        <Link href="/">
          <a>Free Spirits</a>
        </Link>
      </LogoStyles>
      <Nav />
    </div>
  </HeaderStyles>
);

export default Header;
