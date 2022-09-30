import React, { useState, useEffect } from 'react';
import '../styles/ScanScreen.css';
import axios from 'axios';

const RegisterScreen = () => {
  const [owner, setOwner] = useState({
    petName: '',
    ownerEmail: '',
    ownerPhone: '',
  });
  const [QrId, setQrId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      owner: {
        email: `${owner.ownerEmail}`,
        phone: `${owner.ownerPhone}`,
      },
      pet: {
        name: `${owner.petName}`,
      },
    };
    axios
      .post('http://localhost:4000/api/register', data)
      .then((response) => setQrId(response.data))
      .catch((err) => {
        alert('Service/Network error. Please contact admin');
      });
  };

  return (
    <div className='scan-container'>
      <h1 className='lost-owner-header'>Pet Owner Register</h1>
      <div className='header-container'></div>
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <h3>Please enter your details to register a pet</h3>

          <input
            className='scan-input'
            type='text'
            value={owner.petName}
            placeholder='Pet Name*'
            onChange={(e) => setOwner({ ...owner, petName: e.target.value })}
          />

          <input
            className='scan-input'
            type='email'
            value={owner.ownerEmail}
            placeholder='Email Address*'
            onChange={(e) => setOwner({ ...owner, ownerEmail: e.target.value })}
          />

          <input
            className='scan-input'
            type='tel'
            value={owner.ownerPhone}
            placeholder='Phone Number (optional)'
            onChange={(e) => setOwner({ ...owner, ownerPhone: e.target.value })}
          />
          <input id='submit-button' className='submit-button' type='submit' />
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
