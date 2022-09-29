import React, { useState } from 'react';

const ScanScreen = () => {
  const [scannerName, setScannerName] = useState('');
  const [scannerEmail, setScannerEmail] = useState('');
  const [scannerPhone, setScannerPhone] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The name you entered was: ${scannerName} , ${scannerEmail}, ${scannerPhone}`
    );
  };

  return (
    <div>
      <h1>I seem to have lost my owner.</h1>
      <h3>My name is Sacha</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type='text'
            value={scannerName}
            onChange={(e) => setScannerName(e.target.value)}
          />
        </label>
        <label>
          Enter your email:
          <input
            type='email'
            value={scannerEmail}
            onChange={(e) => setScannerEmail(e.target.value)}
          />
        </label>
        <label>
          Enter your phone:
          <input
            type='tel'
            value={scannerPhone}
            onChange={(e) => setScannerPhone(e.target.value)}
          />
        </label>
        <input type='submit' />

        <button>Email owner</button>
        <button>Phone owner</button>
      </form>
    </div>
  );
};

export default ScanScreen;
