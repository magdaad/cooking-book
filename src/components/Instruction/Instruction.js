import React from 'react';
import './Instruction.scss'

const Instruction = ({steps}) => {
  return(
        <div>
            <h3>Preparation:</h3>
            {steps.map((step, i) =>
            <p key={i}>
                {step}
            </p>)}
        </div>
  );
}

export default Instruction;
