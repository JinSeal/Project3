import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link'


const SINGLE_CAT_QUERY = gql`
    query SINGLE_CATS_QUERY($name: String!){
        cat(name: $name) {
            id
            name
            description
            habitat
            iucnStatus
            number
            subspecies
            lifeSpan
            size
            weight
            diet
            bg
            bg2
            photoSet {
            id
            url
            }
            articleSet {
            id
            title
            content
            }
        }
    }
`;

const Style = styled.div`
    .gallary {
        width: 100%;
        img {
            width: 100%;
            height: auto;
        }
    }
    .fact {
        padding: 5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        
        h1 {
            font-size: 8rem;
        }

        table {
            min-width: 600px;
            max-width: 900px;
            border-top: 2px solid white;
            border-bottom: 2px solid white;
        }

        table td {
            padding: 0.8em 3em;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            font-family: Arial, Helvetica, sans-serif;
            color: rgba(255, 255, 255, 0.5);
        }

        table tr td:last-child {
            color: white; 
            min-width: 500px;
        }
    }

    .links {
        background-color: ${props => props.theme.lightgrey}
    }
    
  }
`;

class Cat extends Component {
    render() {
        return (
            <Query query={SINGLE_CAT_QUERY}
                variables={{ name: this.props.query.name }}
            >
                {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error.message}</p>;
                    const cat = data.cat

                    return (
                        <Style>
                            <div className='gallary'>
                                <img src={cat.bg} />
                            </div >

                            <div className='fact'>
                                <h1>{cat.name}</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>IUCN RED LIST STATUS</td>
                                            <td>{iucnDic[cat.iucnStatus]}</td>
                                        </tr>
                                        <tr>
                                            <td>LEFT IN THE WILD</td>
                                            <td>{cat.number}</td>
                                        </tr>
                                        <tr>
                                            <td>RANGE</td>
                                            <td>{cat.habitat}</td>
                                        </tr>
                                        <tr>
                                            <td>SUB-SPECIES</td>
                                            <td>{cat.subspecies}</td>
                                        </tr>
                                        <tr>
                                            <td>LIFE SPAN</td>
                                            <td>{cat.lifeSpan}</td>
                                        </tr>
                                        <tr>
                                            <td>SIZE</td>
                                            <td>{cat.size}</td>
                                        </tr>
                                        <tr>
                                            <td>WEIGHT</td>
                                            <td>{cat.weight}</td>
                                        </tr>
                                        <tr>
                                            <td>DIET</td>
                                            <td>{cat.diet}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='links'>
                                <a>Adoption</a>
                                <a>Donation</a>
                            </div>
                        </Style>
                    )
                }}
            </Query>
        );
    }
}

export default Cat;

const iucnDic = {
    "A_1": "Extinct",
    "A_2": "Extinct in the wild",
    "A_3": "Creitically endangered",
    "A_4": "Endangered",
    "A_5": "Vulnerable",
    "A_6": "Near threatened",
    "A_7": "Least concern"
}