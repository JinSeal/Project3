
import User from './User';
import PleaseSignIn from './PleaseSignIn';
import AdoptionForm from './AdoptionForm';
import Items from './Items';
import React, { useState } from 'react'


const Adoption = () => {
    const [cart, setCart] = useState({
        food: 0,
        medication: 0,
        protection: 0,
        research: 0,
        support: 0
    })

    return (
        <User>
            {({ data }) => {
                const me = data ? data.me : null
                return (
                    <div>
                        {me && me.adoptionSet.length === 0 && (
                            <AdoptionForm />
                        )}
                        {me && me.adoptionSet.length !== 0 && (
                            <div style={{
                                backgroundColor: `white`, color: "black", margin: "2rem auto",
                                maxWidth: "1000px"
                            }}>
                                <div style={{ display: "flex", width: "100%" }
                                } >

                                    <div style={{ width: "300%", padding: "1rem 3rem" }}>
                                        <h1>{me.adoptionSet[0].catId.name}</h1>
                                        <div >
                                            <img style={{ width: "70%" }} src={me.adoptionSet[0].catId.image} alt="cat" />
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: '5rem', paddingRight: '3rem' }}>
                                        <p>{me.adoptionSet[0].catId.description}</p>
                                    </div>
                                </div>

                                <Items />
                            </div>
                        )
                        }
                        {
                            !me && (
                                <PleaseSignIn>Sign In</PleaseSignIn>
                            )
                        }
                    </div >
                )
            }}
        </User >
    );
}


export default Adoption;