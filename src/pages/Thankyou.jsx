import React from 'react';
import { useParams } from "react-router-dom";


function Thankyou() {
    let params = useParams();
    return (
        <>
            <div className="container">
                <div className="card">
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!</p>
                    <br/>
                    <h1>You choose : {params.rating} </h1>
                </div>
            </div>
            
        </>

    );
}

export default Thankyou;