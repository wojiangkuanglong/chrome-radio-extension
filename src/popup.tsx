import * as React from 'react';

function IndexPopup() {
  React.useEffect(() => {
    window.open('chrome-extension://fhbjppbejdecdfmhbdcgeejjjllkalbc/tabs/index.html');
  }, []);

  return <div></div>;
}

export default IndexPopup;
