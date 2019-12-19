
import styled from 'styled-components';
import { Query } from 'react-apollo';
import Item from './Item';
import gql from 'graphql-tag';


const ItemList = styled.div`
  display: grid;
  text-align: center;


`;

const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY{
    allItems {
        id
        title
        description
        image
        price
        unit
    }
    }
`;

const Items = () => (
    <Query query={ALL_ITEMS_QUERY} >
        {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
                <ItemList>{data.allItems.map(item => <Item item={item} key={item.id} />)}</ItemList>
            );
        }}
    </Query>
)

export default Items;
