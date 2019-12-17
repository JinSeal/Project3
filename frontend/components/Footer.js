import Link from 'next/link';
import LogoStyles from './styles/LogoStyles';
import styled from 'styled-components';

const FooterStyles = styled.footer`
    padding: 0;
    margin: 0;
	background: #162231;
	color: white;
    text-align: center;

`;


const Footer = () => (
    <FooterStyles>
        <LogoStyles>
            <Link href="/">
                <a>Free Spirits</a>
            </Link>
        </LogoStyles>
    </FooterStyles>
);

export default Footer;