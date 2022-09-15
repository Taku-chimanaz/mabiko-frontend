import './../css/CreateReservations.css';
import { useContext } from 'react';
//import {HomeContext} from './Home';

export const CreateReservation = () => {
  /* const home = useContext(HomeContext);
  console.log(home) */
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

  return(
    
    <form action="" className="create-reservation-form">
             
      <div className="customer-name-input">
      <input type="text" placeholder='Enter your name'/>
      </div>

      <div className="customer-email-input">
      <input type="email" placeholder='Enter your email'/>
      </div>

      <div className="location-selector-input">
      <input 
        type="text" 
        placeholder='Enter country to select branch'
      />
      </div>

      <AutoComplete/>

      <button className="save-reservation-details">
        Next
      </button>
    </form>
  )
}

const AutoComplete = () => {

  return (
    <div className="auto-complete-section">
      <ul>

      </ul>
    </div>
  )
}
