import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
  query {
    me{
      id
      username
      isStaff
      isSuperuser
      adoptionSet{
        catId{
          name
          image
        }
      }
      cartitemSet{
        quantity
        itemId{
          title
          description
          image
          unit
        }
      }
      orderitemSet{
        quantity
        itemId{
          title
          image
          unit
        }
      }
      orderSet{
        total
        datetime
      }
    
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired,
};

export default User;
export { CURRENT_USER_QUERY };
