import {useState} from 'react'
import './../css/third-step.css'
import { ProgressLine } from './CreateReservation'
import { useNavigate } from 'react-router-dom'


export const ThirdStep = () => {
 
    return (
       <section className="create-reservation-second">
  
          <h2>booking a reservation</h2>
          <p>confirm your details</p>
  
          <article className="form-container-3">
            <ProgressLine finished={"circle1-bold circle2-bold"}/>
            <ThirdStepForm/>
          </article>
  
       </section>
    )
}

const ThirdStepForm = () => {

    const navigate = useNavigate();
    const details = JSON.parse(localStorage.getItem("details"));
    const [changedCustomerName, setChangedCustomerName] = useState(details.customerName);
    const [changedEmail, setChangedEmail] = useState(details.email);
    const [changedBranch, setChangedBranch] = useState(details.branch);
    const [changedAttendees, setChangedAttendees] = useState(details.attendees)
    const [changedTime, setChangedTime] = useState(details.time);


    const checkDetailsChanges = (e) => {

        e.preventDefault();

        if(changedTime !== details.time) details.time = changedTime;
        if(changedEmail !== details.email) details.email = changedEmail;
        if(changedBranch !== details.branch) details.branch = changedBranch;
        if(changedAttendees !== details.attendees) details.attendees = changedAttendees;
        if(changedCustomerName !== details.customerName) details.customerName = changedCustomerName;

        localStorage.setItem("details", JSON.stringify(details));
        navigate('/final-step');
        
    }



    return (

        <form action="" className="create-reservation-form-3">
            <div className="customer-name-input">
                <input 
                    type="text" 
                    placeholder='Enter your name'
                    value={changedCustomerName}
                    onChange={e => setChangedCustomerName(e.target.value)}
                />
            </div>

            <div className="customer-email-input">
                <input 
                    type="email" 
                    placeholder='Enter your email'
                    value={changedEmail}
                    onChange={e => setChangedEmail(e.target.value)}
                />
            </div>

            <div className="location-selector-input">
                <input 
                    type="text" 
                    placeholder='Enter country to select branch'
                    value={changedBranch}
                    onChange={e => setChangedBranch(e.target.value)}
                />
            </div>

            <div className="time-input">
                <input 
                type="datetime-local"
                value={changedTime}
                onChange={e => setChangedTime(e.target.value)}
                />
            </div>
  
            <div className="attendees-input">
                <input 
                    type="number" 
                    placeholder='Enter number of people attending'
                    value={changedAttendees}
                    onChange={e => setChangedAttendees(e.target.value)}
                />
            </div>

            <button onClick={e => checkDetailsChanges(e)} className="save-reservation-details">
                Next
            </button>

        </form>
    )
}
