import { Header } from "./Header";
import { Main } from "./Main";
import { Stats } from "./Stats";
import { Locations } from "./Locations";
import { AboutUs } from "./About-Us";
import { ContactUs } from './ContactUs'
import { Footer } from "./Footer";
import { backendUrl } from "../data";

import React, { useContext, createContext, useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export const HomeContext = createContext();

export const Home = () => {

  const [availableCountries, setAvailableCountries] = useState([]);
  const [message, setMessage] = useState("Fetching Countries")
  const [open, setOpen] = useState(false);

  useEffect(()=>{

     // open snackbar to tell use that you are fetching data;

     setOpen(true)

     // function to fetch all countries

    const getCountries = async () => {


        try {

          const countriesReq = await fetch(`${backendUrl}/api/country/get-all`);
          const countries =  await countriesReq.json();

          if(countries){
            setAvailableCountries(countries.responseData);
            setOpen(true);
            setMessage("Countries fetched successfully")
          }else {
            setOpen(true)
            setMessage(countries.message)
          }

        } catch (error) {
          setOpen(true)
          setMessage(error.message)
        }
    }

    getCountries();

     

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
    
    <HomeContext.Provider value={availableCountries}>
       <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
        sx={{backgroundColor: "#ED4962"}}
      />

      <Header/>
      <Main/>   
      <Stats/>
      <Locations/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </HomeContext.Provider>
  )
}

