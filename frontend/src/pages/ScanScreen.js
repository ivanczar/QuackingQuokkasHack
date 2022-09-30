import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import Icon from "@mui/material/Icon";
import puppyPic from "../assets/Lost_Puppy.jpeg";
import "../styles/ScanScreen.css";
import QR from "../components/QR";

const ScanScreen = () => {
  const [scannerName, setScannerName] = useState("");
  const [scannerEmail, setScannerEmail] = useState("");
  const [scannerPhone, setScannerPhone] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const petName = "Sacha";
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The name you entered was: ${scannerName} , ${scannerEmail}, ${scannerPhone}`
    );
  };

  return (
    <div className="scan-container">
      <h1 className="lost-owner-header">I seem to have lost my owner.</h1>
      <div className="dog-container">
        <p className="pet-name-header">
          My name is <b>{petName}</b>
        </p>
        <img id="puppy-pic" src={puppyPic} alt="lost puppy" />
        <p>
          My owner's number is: <b>0272392173</b>
        </p>
        <button id="phone-button">
          <CallIcon id="icon" />
          <a href="tel:+64272392173">Call Owner</a>
        </button>
      </div>
      <div className="header-container"></div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h3>Please enter your details to help me find my owner</h3>

          <input
            className="scan-input"
            type="text"
            value={scannerName}
            placeholder="Full Name*"
            onChange={(e) => setScannerName(e.target.value)}
          />

          <input
            className="scan-input"
            type="email"
            value={scannerEmail}
            placeholder="Email Address*"
            onChange={(e) => setScannerEmail(e.target.value)}
          />

          <input
            className="scan-input"
            type="tel"
            value={scannerPhone}
            placeholder="Phone Number"
            onChange={(e) => setScannerPhone(e.target.value)}
          />
          <input id="submit-button" className="submit-button" type="submit" />
        </div>
        <div>{QR()}</div>
      </form>
      
      <div className="bottom-buttons-container"></div>
    </div>
    
  );
};

export default ScanScreen;
