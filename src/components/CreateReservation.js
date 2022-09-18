import './../css/CreateReservations.css';
import { useState } from 'react';
import { searchCountry } from './../js/searchBranch';
import { useNavigate } from 'react-router-dom';

export const CreateReservation = () => {
 
  return (
     <section className="create-reservation">

        <h2>booking a reservation</h2>
        <p>first step</p>

        <article className="form-container">
          <ProgressLine/>
          <FirstStepForm/>
        </article>

     </section>
  )
}

export const ProgressLine  = () => {

  return(
    <div className="progress-section">
      <div className="circle1">1</div>
      <div className="timeline"></div>
      <div className="circle2">2</div>
      <div className="timeline"></div>
      <div className="circle3">3</div>
      <div className="timeline"></div>
      <div className="circle4">4</div>
    </div>
  )
}

const FirstStepForm = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [searchedText, setSearchText] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const countries = JSON.parse(localStorage.getItem("countries"));

  const saveDetails = () => {

    const details = {
      customerName,
      email,
      branch: searchedText
    }

    localStorage.setItem("details", JSON.stringify(details));
    navigate('/second-step');

  }

  return(
    
    <form action="" className="create-reservation-form">
             
      <div className="customer-name-input">
        <input 
          type="text" 
          placeholder='Enter your name'
          value={customerName}
          onChange={e => setCustomerName(e.target.value)}
        />
      </div>

      <div className="customer-email-input">
        <input 
          type="email" 
          placeholder='Enter your email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="location-selector-input">
        <input 
          type="text" 
          placeholder='Enter country to select branch'
          value={searchedText}
          onFocus={e => setShowAutoComplete(!showAutoComplete)}
          onChange={ e => searchCountry(e, countries, setSearchedItems, setSearchText, searchedText)}
        />
      </div>

      {
        showAutoComplete &&

         <AutoComplete 
          searchedItems={searchedItems} 
          setSearchText={setSearchText} 
          setShowAutoComplete={setShowAutoComplete}
         />
      }

      <button onClick={saveDetails} className="save-reservation-details">
        Next
      </button>
    </form>
  )
}

const AutoComplete = ({searchedItems, setSearchText, setShowAutoComplete}) => {

  const addBranchToInput = (e) => {

    const branch = e.target.innerHTML;

    setSearchText(branch)
    setShowAutoComplete(false)

  }

  return (
    <div className="auto-complete-section">
      <ul>
        {
          searchedItems.length <= 0 ? <li>No branches available</li>:

          searchedItems.map(branch => {
            return(
              <li key={branch._id} onClick={e => addBranchToInput(e)}>{branch}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
