import React, { useContext } from 'react'
import GrandChildComponent from './GrandChildComponent';
import { MessageContext } from '../App';

function ChildComponent( ) {
  const { message, coins} = useContext(MessageContext);
  return (
    <div>
       <h2>Child Component</h2>
       <p>Message from Parent: { message } </p>
       <hr></hr>
       <GrandChildComponent message={ message } coins= {coins} />
    </div>
  )
}

export default ChildComponent;
