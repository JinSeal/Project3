import User from './User';
import PleaseSignIn from './PleaseSignIn';


const Account = (props) => (
    <User>
        {({ data }) => {
            const me = data ? data.me : null

            return (
                <div>
                    {me && (
                        <>
                            <h1>coming soon</h1>
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