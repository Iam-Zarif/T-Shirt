import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
export const RingContext = createContext('golden');

const Grandpa = () => {
    const ring ='diamond';
    return (
      <div className="GrandpaMain">
        <h1>I am Grandpa</h1>
        {/* <div className="grandpaChild">
          <Father ring={ring}></Father>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </div> */}

        <RingContext.Provider value='golden-Ring'>
          <div className="grandpaChild">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </div>
        </RingContext.Provider>
      </div>
    );
};

export default Grandpa;