import './../css/second-step.css'
import { ProgressLine } from './CreateReservation'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SecondStep = () => {
 
    return (
       <section className="create-reservation-second">
  
          <h2>booking a reservation</h2>
          <p>almost there</p>
  
          <article className="form-container">
            <ProgressLine finished={"circle1-bold"}/>
            <SecondStepForm/>
          </article>
  
       </section>
    )
}

const SecondStepForm = () => {

    const navigate = useNavigate();
    const [time, setTime] = useState("")
    const [attendees, setAttendees] = useState("");
    let details= JSON.parse(localStorage.getItem("details"));
  
    const saveDetailsSecond = (e) => {

      e.preventDefault();
  
      details = {
        ...details,
        time,
        attendees
      }
  
      localStorage.setItem("details", JSON.stringify(details));
      navigate('/third-step');
  
    }

    return(
      
      <form  className="create-reservation-form-2">
               
        <div className="time-input">
          <input 
          type="datetime-local"
          value={time}
          onChange={e => setTime(e.target.value)}
          />
        </div>
  
        <div className="attendees-input">
          <input 
            type="number" 
            placeholder='Enter number of people attending'
            value={attendees}
            onChange={e => setAttendees(e.target.value)}
          />
        </div>
  

        <button onClick={e => saveDetailsSecond(e)} className="save-reservation-details">
          Next
        </button>
      </form>
    )
  }

