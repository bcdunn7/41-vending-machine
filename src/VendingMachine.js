import React from "react";
import { Link } from 'react-router-dom'

const VendingMachine = ({snacks}) => {

    return (
        <div>
            <h2>Vending Machine:
                <ul>
                    {snacks.map(s => (
                        <li><Link to={`/${s}`}>{s}</Link></li>
                    ))}
                </ul>
            </h2>
        </div>
    )
}

export default VendingMachine;