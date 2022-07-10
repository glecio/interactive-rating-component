import React from 'react';
import Numbers from '../components/number/Numbers';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [rating, setRating] = useState('');
    const [parentData, setParentData] = useState('');
    
    const sendChildToParent = (rating) => {
        setRating(rating);
        setParentData(rating);
    };


    return (

        <>
            <div className="container">
                <div className="card">
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!</p>
                    <Numbers sendChildToParent={sendChildToParent}  /> 
                    <br/>
                    <Link onClick={() => setParentData(rating)} to={`/thankyou/${rating}`}>
                        Enviar
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;