import './../css/Locations.css';

export const Locations = () => {
  return (
    
    <section className="locations">

        <div className="locations-header-container">
            <div className="line"></div>
            <h2>locations</h2>
        </div>

        <div className="available-countries">

            <ul>
              <li>Zimbabwe</li>
              <li>Zimbabwe</li>
              <li>Zimbabwe</li>
              <li>Zimbabwe</li>
              <li>Zimbabwe</li>
              <li>Zimbabwe</li>
            </ul>
        </div>

        <div className="search-for-branch">

          <div className="search-container">
            
            <div className="search-input">
              <input type="text" placeholder="Enter country to search"/>
            </div>
             <button className="search-btn">Search</button>
          </div>

          <div className="search-results">
            <p>No branches to show at the moment</p>
          </div>

        </div>
    </section>
  )
}
