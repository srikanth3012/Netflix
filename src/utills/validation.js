import React from "react";
const Validation = (mail, pass) => {
  if (!mail) return "please Enter email and password";
  if (!pass) return "please Enter Password";
  const email = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(mail);
  const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    pass
  );
  if (!email) return "Email is invalid";
  if (!password) return "password is invalid";
  return null;
};
export default Validation;
// /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}
