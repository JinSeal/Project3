import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'evergreen-ui';


const Style = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${props => props.theme.darkBlue};
    margin: 1rem;
    color: white;

    &:hover img {
        border: 2px solid white;
        transform: scale(1.2);

    }

    .image {
        height: 100px;
        margin: 2rem 3rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        padding: 1rem;
    }

    .wrap {
        display: flex;
        margin: 5rem 0 2rem 0;
    }

    p {
        padding: 0;
        margin: 0;
    }


`;


export default class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired
    }

    render() {
        const { item } = this.props
        return (
            <Style >
                <div className="image">
                    <img style={{ height: "100%" }} src={item.image} alt={item.title} />
                </div>
                <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="wrap">
                        <p>$A {item.price} / {item.unit}</p>
                        <Button height={30} marginLeft={16} appearance="primary" intent="warning">
                            Add to Cart
        </Button>
                    </div>
                </div>
            </Style>
        )
    }
}