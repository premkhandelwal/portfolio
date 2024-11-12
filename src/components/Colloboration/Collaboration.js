import React, { useState } from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import axios from 'axios';
import { useAlert } from 'react-alert';
import './Collaboration.css';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

// Alert configuration
const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
};

export default function CollaborationForm() {
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState('');
  const [emailId, setEmail] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const alert = useAlert();
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const formData = {
      name,
      emailId,
      projectType: selectedOption,
      additionalDetails,
    };

    axios
      .post('https://thankful-bee-garment.cyclic.app/submitform', formData)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        showAlert('success', 'Form submitted successfully!');
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        showAlert('error', 'An error occurred. Please try again.');
      });
  };

  const showAlert = (type, message) => {
    alert.show(message, {
      type,
    });
  };

  const validateForm = () => {
    setIsError(false);

    if (name.length < 2) {
      setIsError(true);
      showAlert('error', 'Name should be at least 2 characters long.');
      return false;
    }

    if (!validateEmail(emailId)) {
      setIsError(true);
      showAlert('error', 'Please enter a valid email address.');
      return false;
    }

    if (selectedOption === '') {
      setIsError(true);
      showAlert('error', 'Please select a project type.');
      return false;
    }
    setIsError(false);

    return true;
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <>
        {/* ...existing footer content... */}
        <h2 style={{"marginTop": "100px", "marginBottom": "50px"}}>Let's create experiences, inspire possibilities!</h2>
        <div className={`collaboration-container ${isLoading ? 'loading' : ''}`}>
          
          {/* <div className="left-column">
            <ul className="feature-list">
              <li className="feature">may it be a mobile app</li>
              <li className="feature">may it be a web app</li>
              <li className="feature">may it be any kind of app</li>
              <li className="feature">Every task will be delivered!!</li>
            </ul>
          </div> */}
          {isLoading && <LoadingIndicator />}
          <div className="right-column">
            <h2 className="sub-heading"> Connect by entering your details</h2>
            <form className="collaboration-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {isError && name.length < 2 && (
                  <div className="error-message">Name should be at least 2 characters long.</div>
                )}
              </div>
              <div className="form-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email ID"
                  value={emailId}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {isError && !validateEmail(emailId) && (
                  <div className="error-message">Please enter a valid email address.</div>
                )}
              </div>
              <div className="form-field">
                <select
                  id="project-type"
                  name="project-type"
                  value={selectedOption}
                  onChange={(e) => handleOptionSelect(e.target.value)}
                >
                  <option value="">--Select Project Type--</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="web-app">Web App</option>
                  <option value="desktop-app">Desktop App</option>
                  <option value="backend">Backend</option>
                </select>
                {isError && selectedOption === '' && (
                  <div className="error-message">Please select a project type.</div>
                )}
              </div>
              <div className="form-field">
                <textarea
                  id="additional-details"
                  name="additional-details"
                  rows="4"
                  placeholder="Additional Details"
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                ></textarea>
              </div>
              <div className="form-field">
                <button type="button" disabled={isError} onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </AlertProvider>
  );
}
