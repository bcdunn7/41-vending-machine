import React from 'react';
import { Link } from 'react-router-dom';

const Snack = ({name}) => {

    return(
        <div>
            <p>Please enjoy your {name}!</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    )
}

export default Snack;