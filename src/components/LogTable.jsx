import React, { useState } from 'react';

export default function LogTable( { data, callLog } ) {

  const [pageNum, setPageNum] = useState(1)

  const pageInterval = 15

  let result 

  return (
    <div style={{ height: '87.9vh', width: '100%' }}>
      <table>
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>
    </div>
  );
}
