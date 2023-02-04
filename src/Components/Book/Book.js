import React from 'react';
import { useNavigate } from 'react-router-dom';


const Book = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center min-h-screen'>
            <h1 className='mt-24'>Booking Goes Here</h1>
            <div className='mt-5'>

            <button onClick={()=>navigate('/payment')}>Proceed To Payment</button>
            </div>
        </div>
    );
};

export default Book;