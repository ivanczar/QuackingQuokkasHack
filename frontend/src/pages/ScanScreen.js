import React, { useState, useEffect, useRef } from "react";
import CallIcon from "@mui/icons-material/Call";
import TextIcon from "@mui/icons-material/Message";
import puppyPic from "../assets/Lost_Puppy.jpeg";
import "../styles/ScanScreen.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ScanScreen = () => {
  const [scannerName, setScannerName] = useState("");
  const [scannerEmail, setScannerEmail] = useState("");
  const [scannerPhone, setScannerPhone] = useState("");
  const [ownerDetails, setOwnerDetails] = useState({
    owner: {},
    pet: {},
  });
  const { petID } = useParams();
  const form = useRef();
  const [microchipNumber, setMicrochipNumber] = useState();

  // Generate a random 15 digits
  function random15Digits() {
    var min = 100000000000000;
    var max = 900000000000000;

    // Return random 15 digits
    var num = (Math.floor(Math.random() * min) + max).toLocaleString("fr");
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  useEffect(() => {
    setMicrochipNumber(random15Digits());
  }, []);

  const sendEmail = (e) => {
    alert("Email Sent");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zk1av6g",
        "template_20y07hg",
        form.current,
        "af56DOeaGgV914gA7"
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
          <>
            <p className="pet-name-header">
              My name is <b>{ownerDetails.pet.name}</b>
            </p>
            <p className="pet-name-header">
              My microchip number is: <b>{microchipNumber}</b>
            </p>
          </>
        )}
        <img id="puppy-pic" src={puppyPic} alt="lost puppy" />
        {ownerDetails.owner.phone ? (
          <p>
            My owner's number is: <b>{ownerDetails.owner.phone}</b>
          </p>
        ) : null}
        {ownerDetails.owner.phone && (
          <>
            <h4>Contact Owner</h4>
            <div className="phone-container">
              <button id="phone-button">
                <CallIcon id="icon" />
                <a href={`tel:${ownerDetails.owner.phone}`}>Call</a>
              </button>
              <button id="phone-button">
                <TextIcon id="icon" />
                <a href={`sms:${ownerDetails.owner.phone}`}>Text</a>
              </button>
            </div>
          </>
        )}
      </div>
      <div className="header-container"></div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-container">
          <h3>Please enter your details to help me find my owner</h3>

          <input
            className="scan-input"
            type="text"
            name="scanner_name"
            value={scannerName}
            placeholder="Full Name*"
            onChange={(e) => setScannerName(e.target.value)}
          />

          <input
            className="scan-input"
            type="email"
            name="scanner_email"
            value={scannerEmail}
            placeholder="Email Address*"
            onChange={(e) => setScannerEmail(e.target.value)}
          />

          <input
            className="scan-input"
            type="tel"
            name="scanner_phone"
            value={scannerPhone}
            placeholder="Phone Number"
            onChange={(e) => setScannerPhone(e.target.value)}
          />

          {ownerDetails.pet.name && (
            <input
              type="hidden"
              name="pet_name"
              defaultValue={ownerDetails.pet.name}
            />
          )}

          {ownerDetails.owner.email && (
            <input
              type="hidden"
              name="owner_email"
              defaultValue={ownerDetails.owner.email}
            />
          )}

          <input id="submit-button" className="submit-button" type="submit" />
        </div>
      </form>

      <div className="bottom-buttons-container"></div>
    </div>
  );
};

export default ScanScreen;
