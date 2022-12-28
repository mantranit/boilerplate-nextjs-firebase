import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Copyright from "../src/Copyright";
import { TextField } from "@mui/material";

export default function Login() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h2">
          Login
        </Typography>
        <Box maxWidth="sm">
          <Box sx={{ my: 3 }}>
            <TextField fullWidth type="email" label="Email" variant="standard" />
          </Box>
          <Box sx={{ my: 3 }}>
            <TextField fullWidth type="password" label="Password" variant="standard" />
          </Box>
          <Box sx={{ my: 3 }}>
            <Button fullWidth variant="contained">Login</Button>
          </Box>
        </Box>
        <Copyright />
        <Typography variant="h4" component="h2">
          &nbsp;
        </Typography>
        <Typography variant="h4" component="h2">
          &nbsp;
        </Typography>
      </Box>
    </>
  );
}
