import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import cartoon from "../../images/cartoon.jpg";
import { Grid, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  screen: {
    alignItems: "center",
    padding: "3rem 5rem 4rem 3rem",
  },
  formControl: {
    width: "96%",
    background: "white",
    marginTop: ".5rem",
  },
  button: {
    border: "1px solid #FFB22A",
    borderRadius: "5px",
    margin:"2rem 0 0 0",
    padding: ".6rem",
    width: "12vw",
    color: "black",
    background: "#FFB22A",
    fontSize: "25px",
  },
  inputs:{
padding:"2.5rem"
  },
  tests:{
    padding:"2.5rem"

      },
  cart: {
    width: "40.849194729136165vw",
    height: "92.25352112676056vh",
  },
}));
const ContactUs = () => {
  const classes = useStyles();
  const [forms, setForms] = useState({
    firstName: "adeeko",
    lastName: "feyisetan",
  });
  const [errors, setErrors] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validatePageOne = () => {
    const errors = {};
    const { firstName, lastName, mobileNumber, accountNumber, employeeEmail } =
      forms;
    if (firstName === "") {
      errors.firstName = "field is required";
    }
    if (firstName.length < 3) {
      errors.firstName = "Min. of 3 characters is required";
    }
    if (lastName === "") {
      errors.lastName = "field is required";
    }
    if (lastName.length < 3) {
      errors.lastName = "Min. of 3 characters is required";
    }
    if (mobileNumber === "") {
      errors.mobileNumber = "field is required";
    }
    if (accountNumber === "") {
      errors.accountNumber = "field is required";
    }
    if (accountNumber.length !== 10) {
      errors.accountNumber = " 10 characters is required";
    }
    if (employeeEmail === "") {
      errors.employeeEmail = "field is required";
    }

    return errors;
  };
  return (
    <>
      <Grid container spacing={0} className={classes.screen}>
        <Grid item sm={12} md={12} lg={12} className={classes}>
          <p style={{ fontSize: "2.4rem", margin: "0px" }}>Contact me</p>
          <hr
            style={{
              border: "1px solid #FFB22A",
              width: "4%",
              marginLeft: "105px",
            }}
          />{" "}
          <Typography style={{ alignItems: "center", color: "#34667E",fontSize:"18px" }}>
            Got a project, an idea or a job? Please drop me a message.
          </Typography>
        </Grid>
        <Grid item sm={6} md={6} lg={6} className={classes.tests}>
        
          <img src={cartoon} alt="Logo" className={classes.cart} />{" "}
        </Grid>
        <Grid item sm={6} md={6} lg={6}>
          <Grid container spacing={0} className={classes.inputs}>
            <Grid item sm={6} md={6} lg={6}>
              <Typography>First Name</Typography>
              <TextField
                className={classes.formControl}
                id="outlined-basic"
                variant="outlined"
                name="firstName"
                value={forms.firstName}
                type="Text"
                onChange={handleChange}
                helperText={errors && errors.firstName}
                error={errors && errors.firstName}
              />{" "}
            </Grid>
            <Grid item sm={6} md={6} lg={6}>
              {" "}
              <Typography>Last Name</Typography>
              <TextField
                className={classes.formControl}
                id="outlined-basic"
                variant="outlined"
                name="lastName"
                value={forms.lastName}
                type="text"
                onChange={handleChange}
                helperText={errors && errors.lastName}
                error={errors && errors.lastName}
              />{" "}
            </Grid>

            <Grid item sm={12} md={12} lg={12} className={classes}>
              {" "}
              <Typography>Email</Typography>
              <TextField
                className={classes.formControl}
                id="outlined-basic"
                variant="outlined"
                name="employeeEmail"
                value={forms.employeeEmail}
                type="email"
                onChange={handleChange}
                helperText={errors && errors.employeeEmail}
                error={errors && errors.employeeEmail}
              />{" "}
            </Grid>
            <Grid item sm={12} md={12} lg={12} className={classes}>
              {" "}
              <Typography>Phone Number</Typography>
              <TextField
                className={classes.formControl}
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                name="mobileNumber"
                value={forms.mobileNumber}
                type="text"
                onChange={handleChange}
                helperText={errors && errors.mobileNumber}
                error={errors && errors.mobileNumber}
              />{" "}
            </Grid>
            <Grid item sm={12} md={12} lg={12} className={classes}>
              <Typography>Messages</Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={5}
                defaultValue="Default Value"
                variant="outlined"
                className={classes.formControl}
              />{" "}
            </Grid>
            <Grid item sm={6} md={6} lg={6}>
              {" "}
            </Grid>
            
            <Grid item sm={2} md={2} lg={2}>

              {" "}
            </Grid>

            <Grid item sm={3} md={3} lg={3}>
              {" "}
              <button onClick={validatePageOne} className={classes.button}>Send message</button>{" "}
            </Grid>
            <Grid item sm={1} md={1} lg={1} >            </Grid>


          </Grid>
        </Grid>
        <Grid item sm={12} md={12} lg={12} className={classes}>    
        <h1 style={{ alignItems: "center", color:"#E5E5E5",fontSize:"88px",fontWeight:"400", }}>BRANDS  WORKED  FOR  NOW  AND  PAST</h1> 
        <h1 style={{ alignItems: "center", color:"#E5E5E5",fontSize:"88px",fontWeight:"400" }}>BRANDS  WORKED  FOR  NOW  AND  PAST</h1> <h1 style={{  color:"#E5E5E5",fontSize:"88px",fontWeight:"400" }}>BRANDS  WORKED  FOR  NOW  AND  PAST</h1>  </Grid>


      </Grid>
    </>
  );
};

export default ContactUs;
