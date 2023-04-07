import React from 'react';
import Myself from '../Myself/Myself';
import Bro from '../Bro/Bro';
import Sister from '../Sister/Sister';
import './Father.css'
const Father = ({ ring }) => {
  return (
    <div>
      <h2>I am father</h2>
      <section className="fatherChild">
        <Myself ring={ring}></Myself>
        <Bro></Bro>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Father;