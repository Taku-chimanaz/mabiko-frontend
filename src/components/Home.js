import { Header } from "./Header";
import { Main } from "./Main";
import { Stats } from "./Stats";
import { Locations } from "./Locations";
import { AboutUs } from "./About-Us";
import { ContactUs } from './ContactUs'
import { Footer } from "./Footer";
import React, { useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { getCountries } from "../js/getCountries";
import './../App.css'


export const Home = () => {

  const [availableCountries, setAvailableCountries] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Fetching countries");

  useEffect(() => {
    setOpen(true);
    getCountries(setAvailableCountries, setMessage, setOpen);
  },[]);

  // creating action for the snackbar

  // function to close snackbar
  const handleClose = () => {
    setOpen(false);
  };


  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  

  
  return (
    
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
        sx={{color: "#ED4962"}}
      />

      <Header/>
      <Main/>   
      <Stats availableCountries={availableCountries}/>
      <Locations availableCountries={availableCountries}/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </>
  ) 
}

