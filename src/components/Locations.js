import { useContext } from 'react';
import './../css/Locations.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import { searchCountry } from '../js/searchBranch';

export const Locations = ({availableCountries}) => {
  

  return (
    
    <section className="locations">

        <div className="locations-header-container">
            <div className="line"></div>
            <h2>locations</h2>
        </div>

        <div className="available-countries">

            <ul>
            {
              availableCountries.length <= 0 ? <p>No countries available</p> :

               availableCountries.map(country => {
                 
                 return <li><LocationOnIcon/> {country.name}</li>
               })
            }
            </ul>
        </div>

        {<SearchBranch countries={availableCountries}/>}

        
    </section>
  )
}

const SearchBranch = ({countries}) => {

  const [searchedText, setSearchText] = useState("");
  const [searchedItems, setSearchedItems] = useState([])

  

  return(
    <div className="search-for-branch">

      <div className="search-container">
            
        <div className="search-input">

          <input 
            type="text" 
            placeholder="Enter country to search"
            value={searchedText}
            onChange={e => searchCountry(e, countries, setSearchedItems, setSearchText, searchedText)}
          ></input>
        </div>
    

      </div>

      <div className="search-results">
        
        <ul>
        {
           searchedItems.length <= 0 ? <p>No branches to show</p> :

           searchedItems.map(branch => {
              return (
                <li>{branch}</li>
              )
           })
        }
        </ul>
      </div>

    </div>

  )
}
