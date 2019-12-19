
import Link from 'next/link';
import User from './User';
import PleaseSignIn from './PleaseSignIn';
import styled from 'styled-components';
import AdoptionForm from './AdoptionForm';




const Adoption = (props) => (
    <User>
        {({ data }) => {
            const me = data ? data.me : null
            console.log(me);


            return (
                <div>
                    {me && me.adoptionSet.length === 0 && (
                        <AdoptionForm />
                    )}
                    {me && me.adoptionSet.length !== 0 && (
                        <>
                            <Link href="/adoption">
                                <a>Adoption</a>
                            </Link>
                            <Link href="/account">
                                <a>Account</a>
                            </Link>
                        </>
                    )}
                    {!me && (
                        <PleaseSignIn>Sign In</PleaseSignIn>
                    )}
                </div>
            )
        }}
    </User>
);


export default Adoption;