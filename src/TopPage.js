import React, { useState } from "react";
import "./TopPage.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaRegEye } from "react-icons/fa";
import { PiEyeClosedDuotone } from "react-icons/pi";
const TopPage = () => {
  const [usernameMessage, setUsernameMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const subForm = (event) => {
    event.preventDefault();

    const usernamePattern =
      /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,}$/;
    const account = event.target.elements.accId.value;
    const password = event.target.elements.password.value;
    let isRight = true;

    //Validation for Username
    if (usernamePattern.test(account)) {
      console.log("Valid Username:", account);
      setUsernameMessage("");
    } else {
      console.log("Invalid Username:", account);
      setUsernameMessage("※Please enter the proper Username");
      isRight = false;
    }
    // Validation for password
    if (passwordPattern.test(password)) {
      console.log("Valid password:", password);
      setPassMessage("");
    } else {
      console.log("Invalid password:", password);
      setPassMessage("※Please enter the proper password");
      isRight = false;
    }

    if (isRight) {
      console.log("Form is valid. Ready to submit!");
    }
  };

  return (
    <div className="topPageWrap">
      <h1 className="topTitle">Abagauss</h1>
      <form
        className="loginWrap"
        // action="success.html"
        method="get"
        onSubmit={subForm}
      >
        <TextField id="accId" label="Username" variant="outlined" />
        <div className="message">{usernameMessage}</div> <br />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* {showPassword ? password : "*".repeat(password.length)} */}
        <Button onClick={()=> setShowPassword(!showPassword)} variant="outlined" >
          {showPassword? "Hide " : "Show "}
         Password &nbsp;  
         {showPassword? <PiEyeClosedDuotone /> : <FaRegEye />} 
        </Button>

        <div className="password">{passMessage}</div> <br />

        <Button id="submit" variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TopPage;
