import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MuiTelInput } from "mui-tel-input";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert } from "@mui/material";

const theme = createTheme();

export default function PhoneLogin() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const [otp, setOtp] = useState();
  const { setUpRecaptcha } = useUserAuth();
  const navigate = useNavigate();
  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Please Enter a valid Phone Number");
    try {
      const response = await setUpRecaptcha(number);
      console.log(response);
      setConfirmObj(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === "" || otp === null) return;
    try {
      setError("");
      await confirmObj.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in with Phone
          </Typography>
          {error && <Alert variant="danger">{error} </Alert>}
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={getOtp}
            style={{ display: !flag ? "block" : "none" }}
          >
            <MuiTelInput
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <Box id="recaptcha-container"></Box>

            <Grid container>
              <Grid item md></Grid>
              <Button
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Cancel
              </Button>
              <Grid item></Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 4 }}
              >
                send OTP
              </Button>
            </Grid>
          </Box>
        </Box>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={verifyOtp}
          style={{ display: flag ? "block" : "none" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Enter your OTP"
            name="text"
            onChange={(e) => setOtp(e.target.value)}
            autoFocus
          />

          <Grid container>
            <Grid item md>
              <Link to="/">
                <Button variant="outlined" sx={{ mt: 3, mb: 2, ml: 3 }}>
                  Cancel
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 4 }}
              >
                Verify OTP
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
