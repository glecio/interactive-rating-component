import React from 'react';
import { useParams } from "react-router-dom";


function Thankyou() {
    let params = useParams();
    return (
        <>
            <h1>You choose : {params.rating} </h1>
        </>

    );
}

export default Thankyou;