export const searchCountry = (e,  countries, setSearchedItems, setSearchText, searchedText) => {

    setSearchText(e.target.value);

    countries.forEach(country => {

      if(country.name.startsWith(searchedText) && searchedText.length !== 0){
         setSearchedItems([...country.branches]);
      }

    })
}