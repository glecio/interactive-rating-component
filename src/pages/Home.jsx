import React from 'react';
import { ReactComponent as Star } from '../assets/icon-star.svg';

import Numbers from '../components/number/Numbers';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [rating, setRating] = useState('');
    
    const sendChildToParent = (rating) => {
        setRating(rating);
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-img">
                        <Star className='star-img' />
                    </div>
                    
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!</p>
                    <Numbers sendChildToParent={sendChildToParent}  /> 
                    <br/>
                    <Link to={`/thankyou/${rating}`} className='btn-send'>
                        SUBMIT
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;