import React, { useEffect, useState } from "react";
import "../styles/ScanScreen.css";
import QR from "../components/QR";
import axios from 'axios';

const RegisterScreen = () => {
  const [owner, setOwner] = useState({
    petName: '',
    ownerEmail: '',
    ownerPhone: '',
  });
  
  const [QrId, setQrId] = useState('');
  const [Qr, setQr] = useState(null);

  useEffect(() => {
    console.log(QrId);
    //Use a useRef to prevent this from running on render, but allow it to run on successful API call 
  }, [QrId]);

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
    <div className="scan-container">
      {Qr === null ? <div><h1 className="lost-owner-header">Pet Owner Register</h1>
      <div className="header-container"></div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h3>Please enter your details to register a pet</h3>

          <input
            className='scan-input'
            type='text'
            value={owner.petName}
            placeholder='Pet Name*'
            required
            onChange={(e) => setOwner({ ...owner, petName: e.target.value })}
          />

          <input
            className='scan-input'
            type='email'
            value={owner.ownerEmail}
            placeholder='Email Address*'
            required
            onChange={(e) => setOwner({ ...owner, ownerEmail: e.target.value })}
          />

          <input
            className='scan-input'
            type='tel'
            value={owner.ownerPhone}
            placeholder='Phone Number (optional)'
            onChange={(e) => setOwner({ ...owner, ownerPhone: e.target.value })}
          />

          <input id="submit-button" className="submit-button" type="submit" onClick={handleSubmit} />
        </div>
      </form></div> : Qr}
      
      
    </div>
  );
};



export default RegisterScreen;
