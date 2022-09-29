import React, { useState } from 'react';
import logo from '../assets/ezyFind_Horizontal.png';
import puppyPic from '../assets/Lost_Puppy.jpg';
import '../styles/ScanScreen.css';

const ScanScreen = () => {
  const [scannerName, setScannerName] = useState('');
  const [scannerEmail, setScannerEmail] = useState('');
  const [scannerPhone, setScannerPhone] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const petName = 'Sacha';
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The name you entered was: ${scannerName} , ${scannerEmail}, ${scannerPhone}`
    );
  };

  return (
    <div className='scan-container'>
      <div className='images-container'>
        <img id='logo' src={logo} alt='ezyFind logo' />
        {/* <img id='puppy-pic' src={puppyPic} alt='sad puppy' /> */}
      </div>
      <div className='header-container'>
        <h1 className='lost-owner-header'>I seem to have lost my owner.</h1>
        <h3 className='pet-name-header'>My name is {petName}</h3>
        <h3>My owners number is: 0272392173</h3>
        <button>Phone owner</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <p>or</p>
          <h3>Please enter your details to help me find my owner</h3>

          <input
            type='text'
            value={scannerName}
            placeholder='Full Name*'
            onChange={(e) => setScannerName(e.target.value)}
          />

          <input
            type='email'
            value={scannerEmail}
            placeholder='Email Address*'
            onChange={(e) => setScannerEmail(e.target.value)}
          />

          <input
            type='tel'
            value={scannerPhone}
            placeholder='Phone Number'
            onChange={(e) => setScannerPhone(e.target.value)}
          />
          <input className='submit-button' type='submit' />
        </div>
      </form>
      <div className='bottom-buttons-container'></div>
    </div>
  );
};

export default ScanScreen;
