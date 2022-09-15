import { backendUrl } from "../data";

export const getCountries = async (setAvailableCountries, setMessage, setOpen) => {

  
    try {

      const countriesReq = await fetch(`${backendUrl}/api/country/get-all`);
      const countries =  await countriesReq.json();

      if(countries){
      
        settingSnackBar(setMessage, setOpen, countries);
        countries.responseData.length > 0 && setAvailableCountries([...countries.responseData]);

        // storing the value of countries in local storage

        localStorage.setItem("countries", JSON.stringify(countries.responseData));
        
      }else {
        settingSnackBar(setMessage, setOpen, countries)
      }

    } catch (error) {
      settingSnackBar(setMessage, setOpen, error)
    }
}

const settingSnackBar = (setMessage, setOpen, messageSource) => {
  setOpen(true);
  setMessage(messageSource.message)
}