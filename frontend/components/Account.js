import Link from 'next/link';
import User from './User';
import PleaseSignIn from './PleaseSignIn';
import styled from 'styled-components';




const Account = (props) => (
    <User>
        {({ data }) => {
            const me = data ? data.me : null

            return (
                <div>
                    {me && (
                        <>
                            <Link href="/adoption">
                                <a>Account</a>
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


export default Account;