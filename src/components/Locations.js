import { useContext } from 'react';
import './../css/Locations.css';
import { HomeContext } from './Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';

export const Locations = () => {

  const countries = useContext(HomeContext);


  return (
    
    <section className="locations">

        <div className="locations-header-container">
            <div className="line"></div>
            <h2>locations</h2>
        </div>

        <div className="available-countries">

            <ul>
            {
               countries.length <= 0 ? <p>No countries available</p> :

               countries.map(country => {
                 
                 return <li><LocationOnIcon/> {country.name}</li>
               })
            }
            </ul>
        </div>

        <SearchBranch countries={countries}/>

        
    </section>
  )
}

const SearchBranch = ({countries}) => {

  const [searchedText, setSearchText] = useState("");
  const [searchedItems, setSearchedItems] = useState([])


  const searchCountry = (e) => {
      setSearchText(e.target.value);

      countries.forEach(country => {

        if(country.name.startsWith(searchedText) && searchedText.length !== 0){
           setSearchedItems([...country.branches]);
           console.log(searchedItems)
        }

      })
  }
  

  return(
    <div className="search-for-branch">

      <div className="search-container">
            
        <div className="search-input">

          <input 
            type="text" 
            placeholder="Enter country to search"
            value={searchedText}
            onChange={e => searchCountry(e)}
          ></input>
        </div>
    
        <button className="search-btn">Search</button>

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
