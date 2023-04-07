import React from 'react';
import Special from '../Special/Special';

const Myself = ({ ring }) => {
  return (
    <div>
      <h3>i am myself</h3>
      <section>
        <Special>{ring}</Special>
      </section>
    </div>
  );
};

export default Myself;