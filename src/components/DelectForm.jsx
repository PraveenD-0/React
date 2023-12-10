import React, {useEffect} from 'react';
import axios from 'axios';

function DelectForm() {
  return (
    <div>
      <br /><br />
      <label>
        <p><strong>ID:</strong></p>
        <p><strong>content:</strong></p>
        <p><strong>important:</strong></p>

      </label>
      <br />
      <button> Delete Note</button>
    </div>
  )
}

export default DelectForm;
