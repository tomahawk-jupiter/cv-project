import React, { useState } from "react";

const Contact = () => {
  const [btnLabel, setBtnLabel] = useState("Edit");
  const [fields, setFields] = useState({
    name: "Bob",
    email: "bob@email",
    phone: "1234567",
  });

  const editContact = () => {
    if (btnLabel === "Edit") {
      setBtnLabel("Submit");
    } else {
      setBtnLabel("Edit");
    }
  };

  const changeText = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setFields({
      [field]: value,
    });
  };

  if (btnLabel === "Edit") {
    return (
      <div className="contact-container">
        <div>{fields.name}</div>
        <div>{fields.email}</div>
        <div>{fields.phone}</div>
        <button onClick={editContact}>{btnLabel}</button>
      </div>
    );
  }
  return (
    <div className="contact-container">
      <button onClick={editContact}>{btnLabel}</button>
      <input
        name="name"
        type="text"
        defaultValue={fields.name}
        onChange={changeText}
      ></input>
      <input
        name="email"
        type="text"
        defaultValue={fields.email}
        onChange={changeText}
      ></input>
      <input
        name="phone"
        type="text"
        defaultValue={fields.phone}
        onChange={changeText}
      ></input>
    </div>
  );
};

export default Contact;
