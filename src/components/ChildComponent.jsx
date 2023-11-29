import React from 'react'

function ChildComponent() {
  return (
    <div>
       <h2>Child Component</h2>
       <p>Message from Parent: { } </p>
       <hr></hr>
       <GrandChildComponent />
    </div>
  )
}

export default ChildComponent;
