import React from "react";
import "./TopPage.scss";
import TextField from "@mui/material/TextField";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const TopPage = () => {
  return (

      <div className="topPageWrap">
        <h1 className="topTitle">Abaguss</h1>

 
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

        {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box> */}
    
        {/* <div className="loginWrap">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div> */}

      </div>

  );
};

export default TopPage;
