import React from 'react'

function GrandChildComponent({ message , coins}) {
  return (
    <div>
      <h3> Grand Child Component</h3>
      <p>Message from Child Component: { message }</p>
      <p>Remaining coins: { coins}</p>
      <hr></hr>
    </div>
  )
}

export default GrandChildComponent;
