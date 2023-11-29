import React, { useContext } from 'react';
import { MessageContext } from '../App';

// wrapped inside the child component
// data: message should come from the parent component
function GrandChildComponent() {

    const { message, coins } = useContext(MessageContext);

    const coinsSum = () => {
        return coins.reduce((prev, curr) => prev + curr, 0);
    }

  return (
      <div>
          <h3>Grand Child Component</h3>
          <p>Message from Child Component: {message}</p>
          <p>Remaining Coins: { coinsSum() }</p>
    </div> 
  )
}
export default GrandChildComponent;