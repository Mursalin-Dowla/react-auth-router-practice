import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Payment = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='min-h-screen mt-24 text-center'>
            {user?.uid && <p>Hi {user.displayName} your</p>}
            <h1>Payment Gateway Here</h1>
        </div>
    );
};

export default Payment;