import React from 'react';
import { useParams } from "react-router-dom";
import { ReactComponent as ThankYouImg } from '../assets/illustration-thank-you.svg';


function Thankyou() {
    let params = useParams();
    return (
        <>
            <div className="container thankyou__container">
                <article className="thankyou__card">
                    <div className="thankyou__card-img">
                        <ThankYouImg className='thankyou-img'/>
                    </div>
                    <span>You selected {params.rating} out of 5 </span>
                    <h1>Thank You!</h1>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </article>
            </div>
            
        </>

    );
}

export default Thankyou;