import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({children}) => {
    const angti = useContext(RingContext);
    return (
        <div>
            <p>{angti}</p>
        </div>
    );
};

export default Special;