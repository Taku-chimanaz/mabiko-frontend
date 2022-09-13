import './../App.css';
import { Home } from './Home';
import { CreateReservation} from './CreateReservation'
import React, { useContext, createContext, useEffect, useState } from "react";
import { getCountries } from '../js/getCountries';

export const GlobalContext = createContext();


function App() {

  const [availableCountries, setAvailableCountries] = useState([]);
  const [message, setMessage] = useState("Fetching Countries")
  const [open, setOpen] = useState(false);

  useEffect(()=>{

    // open snackbar to tell use that you are fetching data;

    setOpen(true)

    // function to fetch all countries

   

   getCountries(setAvailableCountries, setOpen, setMessage);

    

 },[]);


  return (
    <GlobalContext.Provider value={{open, setOpen, message, setMessage, availableCountries, setAvailableCountries}}>
      <Home/>
      <CreateReservation/>
    </GlobalContext.Provider>
  );
}

export default App;
