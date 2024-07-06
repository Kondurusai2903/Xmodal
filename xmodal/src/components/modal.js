import React, { useState, useRef, useEffect } from "react";

const Modal = ({ closeModal }) => {
  const [userdetails, setUserdetails] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  const modalref = useRef();
  const handleclose = (e) => {
    if (modalref.current === e.target) {
      closeModal(false);
    }
  };
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserdetails({ ...userdetails, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = userdetails;
    if (phone.length < 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number");
      return false;
    }
    if (new Date(dob).getTime() >= new Date().getTime()) {
      alert("Invalid date of birth. Date of birth cannot be in the future");
      return false;
    }
    alert(`${username}  dhkjahdk ${email}  ${phone} ${dob}`);
    closeModal(false);
    // alert(userdetails);
  };
  console.log(userdetails);
  return (
    <div className="modal" ref={modalref} onClick={handleclose}>
      <div className="modal-content">
        <h1 className="formTitle">Fill Details</h1>
        <form className="form" onSubmit={handlesubmit}>
          <div class="formdiv">
            <label for="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={userdetails.username}
              onChange={handlechange}
            />
          </div>
          <div class="formdiv">
            <label for="email">Email Address:</label>
            <input
              type="email"
              id="email"
              required
              name="email"
              value={userdetails.email}
              onChange={handlechange}
            />
          </div>
          <div class="formdiv">
            <label for="phone">Phone Number:</label>
            <input
              type="phone"
              id="phone"
              required
              value={userdetails.phone}
              name="phone"
              onChange={handlechange}
            />
          </div>
          <div class="formdiv">
            <label for="date">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              required
              value={userdetails.dob}
              name="dob"
              onChange={handlechange}
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
