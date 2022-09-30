import React, { useState, useEffect, useRef } from 'react';
import CallIcon from '@mui/icons-material/Call';
import Icon from '@mui/material/Icon';
import puppyPic from '../assets/Lost_Puppy.jpeg';
import '../styles/ScanScreen.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ScanScreen = () => {
  const [scannerName, setScannerName] = useState('');
  const [scannerEmail, setScannerEmail] = useState('');
  const [scannerPhone, setScannerPhone] = useState('');
  const [ownerDetails, setOwnerDetails] = useState({
    owner: {},
    pet: {},
  });
  const { petID } = useParams();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert(
      `The name you entered was: ${scannerName} , ${scannerEmail}, ${scannerPhone}`
    );
    emailjs
      .sendForm(
        'service_zk1av6g',
        'template_4un7ulc',
        form.current,
        'af56DOeaGgV914gA7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const getOwnerDetails = () => {
    axios
      .get('http://localhost:4000/api/retrievePet/' + petID)
      .then((response) => {
        setOwnerDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert('Network error. Please try again later');
      });
  };

  useEffect(() => {
    getOwnerDetails();
  }, []);
  return (
    <div className='scan-container'>
      <h1 className='lost-owner-header'>I seem to have lost my owner.</h1>
      <div className='dog-container'>
        {ownerDetails && (
          <p className='pet-name-header'>
            My name is <b>{ownerDetails.pet.name}</b>
          </p>
        )}
        <img id='puppy-pic' src={puppyPic} alt='lost puppy' />
        {ownerDetails.owner.phone ? (
          <p>
            My owner's number is: <b>{ownerDetails.owner.phone}</b>
          </p>
        ) : null}
        {ownerDetails.owner.phone && (
          <button id='phone-button'>
            <CallIcon id='icon' />
            <a href={`tel:${ownerDetails.owner.phone}`}>Call Owner</a>
          </button>
        )}
      </div>
      <div className='header-container'></div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-container'>
          <h3>Please enter your details to help me find my owner</h3>

          <input
            className='scan-input'
            type='text'
            name='scanner_name'
            value={scannerName}
            placeholder='Full Name*'
            onChange={(e) => setScannerName(e.target.value)}
          />

          <input
            className='scan-input'
            type='email'
            name='scanner_email'
            value={scannerEmail}
            placeholder='Email Address*'
            onChange={(e) => setScannerEmail(e.target.value)}
          />

          <input
            className='scan-input'
            type='tel'
            name='scanner_phone'
            value={scannerPhone}
            placeholder='Phone Number'
            onChange={(e) => setScannerPhone(e.target.value)}
          />
          {ownerDetails.pet.name && (
            <input
              type='hidden'
              name='pet_name'
              defaultValue={ownerDetails.pet.name}
            />
          )}
          {ownerDetails.owner.email && (
            <input
              type='hidden'
              name='owner_email'
              defaultValue={ownerDetails.owner.email}
            />
          )}
          <input id='submit-button' className='submit-button' type='submit' />
        </div>
      </form>

      <div className='bottom-buttons-container'></div>
    </div>
  );
};

export default ScanScreen;
