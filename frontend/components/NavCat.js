import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import PropTypes from 'prop-types';

const iucnDic = {
    "A_1": "Extinct",
    "A_2": "Extinct in the wild",
    "A_3": "Creitically endangered",
    "A_4": "Endangered",
    "A_5": "Vulnerable",
    "A_6": "Near threatened",
    "A_7": "Least concern"
}

const Style = styled.div`
    display: grid;
    grid-column: 1;

    &:hover img {
        border: 2px solid white;
        transform: scale(1.2);

    }

    div {
        height: 100px;
        margin: 2rem 3rem;
    }

    p {
        padding: 0;
        margin: 0;
        text-align: center;
    }


`;


export default class NavCat extends Component {
    static propTypes = {
        cat: PropTypes.object.isRequired
    }

    render() {
        const { cat } = this.props
        return (
            <div onClick={() => this.props.openDrawer()}>
                <Link href={{
                    pathname: '/cat',
                    query: { name: cat.name }
                }}>

                    <Style >
                        <div>
                            <img style={{ height: "100%", borderRadius: "50%" }} src={cat.image} alt={cat.name} />
                        </div>
                        <p>{cat.name}</p>
                        <p>{iucnDic[cat.iucnStatus]}</p>
                    </Style>
                </Link>
            </div>
        )
    }
}
