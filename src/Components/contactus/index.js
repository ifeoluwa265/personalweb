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
    borderRadius: "6px",
    padding: ".5rem",
    width: "85%",
    color: "black",
    background: "#FFB22A",
    fontSize: "1.3rem",
    marginTop:"2rem"

  },
  inputs: {
    padding: "2.5rem",
  },
  tests: {
    padding: "2.5rem",
  },
  cart: {
    width: "40.849194729136165vw",
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
  const handlePageOne = () => {
    const checkErrors = validatePageOne();
    setErrors(checkErrors);
    if (Object.keys(checkErrors).length > 0) {
      return;
    }
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
          <Typography style={{ fontSize: "1.8rem",}} id="section4">Contact me</Typography>
          <hr
            style={{
              border: "1px solid #FFB22A",
              width: "4%",
              marginLeft: "105px",
            }}
          />{" "}
          <h6
            style={{ alignItems: "center", color: "#34667E", fontSize: "18px" }}
          >
            Got a project, an idea or a job? Please drop me a message.
          </h6>
        </Grid>
      
      
        <Grid item xs={12}sm={12} md={6}  className={classes.tests}>
          <img src={cartoon} alt="Logo" className={classes.cart} />{" "}
        </Grid>
        <Grid item xs={12}sm={12} md={6}>
          <Grid container spacing={0} className={classes.inputs}>
            <Grid item  xs={12} sm={12} md={6} >
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
            <Grid item  xs={12} sm={12} md={6} >
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

            <Grid item  xs={12} sm={12} md={12}>
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
            <Grid item xs={12} sm={12} md={12} >
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
            <Grid item xs={12} sm={12} md={12} >
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
            <Grid item  xs={12} sm={12} md={6} />

<Grid item  xs={12} sm={12} md={6}>
  {" "}
  <button onClick={handlePageOne} className={classes.button}>
    Send message
  </button>{" "}
</Grid>


          
          </Grid>
        </Grid>



      </Grid>
      
      <Grid item xs={12} sm={12} md={12}  >
          <h1
            style={{
              color: "#E5E5E5",
              fontSize: "25px",
              fontWeight: "400",
            }}
          >
BRANDS WORKED FOR NOW AND PAST BRANDS WORKED FOR NOW AND PAST BRANDS WORKED FOR NOW AND PAST BRANDS WORKED FOR NOW AND PAST BRANDS WORKED FOR NOW AND PAST BRANDS WORKED FOR NOW AND PAST BRANDS WORKED FOR NOW AND PASTBRANDS WORKED FOR NOW AND PASTBRANDS WORKED FOR NOW AND PAST BRANDS WORKED FOR NOW ANDPAST BRANDS WORKED FOR NOW AND PASTBRANDS WORKED FOR NOW AND PAST
          </h1>
        </Grid>
    </>
  );
};

export default ContactUs;
