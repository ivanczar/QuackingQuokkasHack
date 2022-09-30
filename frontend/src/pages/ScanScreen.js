import React, { useState, useEffect } from "react";
import CallIcon from "@mui/icons-material/Call";
import Icon from "@mui/material/Icon";
import puppyPic from "../assets/Lost_Puppy.jpeg";
import "../styles/ScanScreen.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const ScanScreen = () => {
  const [scannerName, setScannerName] = useState("");
  const [scannerEmail, setScannerEmail] = useState("");
  const [scannerPhone, setScannerPhone] = useState("");
  const [ownerDetails, setOwnerDetails] = useState({
    owner: {},
    pet: {},
  });
  const { petID } = useParams();
  const [microchipNumber, setMicrochipNumber] = useState();

  function random15Digits() {
    var min = 100000000000000;
    var max = 900000000000000;

    return Math.floor(Math.random() * min) + max;
  }

  useEffect(() => {
    setMicrochipNumber(random15Digits());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The name you entered was: ${scannerName} , ${scannerEmail}, ${scannerPhone}`
    );
  };

  const getOwnerDetails = () => {
    axios
      .get("http://localhost:4000/api/retrievePet/" + petID)
      .then((response) => {
        setOwnerDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Network error. Please try again later");
      });
  };

  useEffect(() => {
    getOwnerDetails();
  }, []);
  return (
    <div className="scan-container">
      <h1 className="lost-owner-header">I seem to have lost my owner.</h1>
      <div className="dog-container">
        {ownerDetails && (
          <p className="pet-name-header">
            My name is <b>{ownerDetails.pet.name}</b>
          </p>
        )}
        <img id="puppy-pic" src={puppyPic} alt="lost puppy" />
        {ownerDetails.owner.phone ? (
          <p>
            My owner's number is: <b>{ownerDetails.owner.phone}</b>
          </p>
        ) : null}
        {ownerDetails.owner.phone && (
          <button id="phone-button">
            <CallIcon id="icon" />
            <a href={`tel:${ownerDetails.owner.phone}`}>Call Owner</a>
          </button>
        )}
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
      </form>

      <div className="bottom-buttons-container"></div>
    </div>
  );
};

export default ScanScreen;
