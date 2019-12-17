import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link'
import ItemStyles from '../components/styles/ItemStyles';



const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Items extends Component {
    render() {
        return (
            <Center>
                <ItemsList>
                    <ItemStyles>
                        <Link href={{
                            pathname: '/cats',
                            query: "cats.name"
                        }}>
                            <a>title</a>
                        </Link>
                        <p>
                            coming
                         </p>
                    </ItemStyles>
                </ItemsList>
            </Center>
        );
    }
}

export default Items;