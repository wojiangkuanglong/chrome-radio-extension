import { useState } from 'react';

function IndexPopup() {
  const [data, setData] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        width: 400,
      }}
    >
      <h2>
        Welcome to your
        <a href="https://www.plasmo.com" target="_blank" rel="noreferrer">
          {' '}
          Plasmo
        </a>{' '}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="chrome-extension://fhbjppbejdecdfmhbdcgeejjjllkalbc/tabs/index.html" target="_blank">
        tab
      </a>
    </div>
  );
}

export default IndexPopup;
