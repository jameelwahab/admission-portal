import {
  Avatar,
  Box,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Checkbox,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../style/loginstyle";
import loginiamge from "../images/loginimg.png";
import { useState } from "react";
import axios from "axios";
function Login() {
  // ---------state for inputs-Handleling--------
  const [inputvalue, setInputvalue] = useState({ username: "", password: "" });

  // ---------state for Error-Handle-------------
  const [errorhandle, setErrorhandle] = useState({});

  // ---------state for handle-loading-----------
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const apiCall = {
      url: "",
      method: "POST",
    };
    const apiResponse = await axios(apiCall);
    if (apiResponse.status === 200 || apiResponse.status === 201) {
      console.log("Ustad g chaaa gy o");
      setLoading(false)
    }
  };

  // ---------function for input handeling-------
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInputvalue({ ...inputvalue, [name]: value });
  };

  // ---------function for Error-Handeling--------
  const errorHandeling = (inputvalue) => {
    console.log(inputvalue.username);
    let result = {};
    if (inputvalue.username.length <= 5) {
      result.username = "Wrong user name*";
    } else if (inputvalue.password.length <= 5) {
      result.password = "Wrong password*";
    }
    setErrorhandle(result);
  };

  // --------function for handle-submit-----------
  const  handleSubmit=()=>{
    errorHandeling(inputvalue);
    // fetchData();
  }
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "110px auto",
  };
  const avatarStyle = { backgroundColor: "#7B1FA2" };
  return (
    <>
      <Box component="form" sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid
            container
            item
            md={8}
            justifyContent="center"
            bgcolor={"#FBFCFB"}
            alignItems="center"
            style={{ height: "100vh" }}
          >
            <img src={loginiamge} />
          </Grid>
          <Grid item md={4}>
            <Grid>
              <Grid elevation={10} style={paperStyle}>
                <Grid align="center" mb={2}>
                  <Avatar style={avatarStyle}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <h3>Sign in</h3>
                </Grid>
                <Grid mb={2}>
                  <TextField
                    onChange={inputHandle}
                    name="username"
                    error={errorhandle?.username}
                    label={
                      errorhandle?.username ? "wrong username" : "username"
                    }
                    placeholder="Enter your name"
                    variant="standard"
                    fullWidth
                    color="secondary"
                    type="text"
                    // helperText={errorhandle?.username}
                    // sx={{'& .MuiFormHelperText-root':{color:'red',fontWeight:'600'}}}
                  />
                </Grid>
                <Grid mb={2}>
                  <TextField
                    onChange={inputHandle}
                    name="password"
                    error={errorhandle?.password}
                    label={
                      errorhandle?.password ? "wrong password" : "password"
                    }
                    placeholder="Enter your name"
                    variant="standard"
                    fullWidth
                    color="secondary"
                    type="password"
                    // helperText={errorhandle?.password}
                    // sx={{'& .MuiFormHelperText-root':{color:'red', fontWeight:'600'}}}
                  />
                </Grid>
                <Grid mb={2}>
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="secondary" />}
                    label="Remember me"
                  />
                </Grid>
                <Typography mb={2} align="right">
                  <a href="#" style={{ color: "black", fontSize: "13px" }}>
                    Forgot password ?
                  </a>
                </Typography>
                <Grid mb={3}>
                  <LoadingButton
                    loading={loading}
                    fullWidth
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Login now
                  </LoadingButton>
                </Grid>
                <Typography mb={3}>
                  New user?
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#00A76F" }}
                  >
                    Creat an account
                  </a>
                </Typography>
                <Grid align="center">
                  <a href="#">
                    <GoogleIcon className="me-3" color="secondary" />
                  </a>
                  <a href="#">
                    <FacebookIcon className="me-3" color="secondary" />
                  </a>
                  <a href="#">
                    <TwitterIcon color="secondary" />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
