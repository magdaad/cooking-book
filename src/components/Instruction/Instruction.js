import React from 'react';
import './Instruction.scss'

const Instruction = ({steps}) => {
  return(
        <div>
            <h3>Preparation:</h3>
            <p>{steps}</p>
        </div>
  );
}

export default Instruction;
