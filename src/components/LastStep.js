import './../css/LastStep.css';
import { ProgressLine } from './CreateReservation';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { sendReservationVerificationCode, verifyReservationCode } from '../js/general';

export const LastStep = () => {
  
  const [message, setMessage] = useState("Sending Email");
  const [resendEmail, setResendEmail] = useState(false);
  const [open, setOpen] = useState(false);


  // sending verification code to user

  useEffect(() => {

    sendReservationVerificationCode(setMessage, setResendEmail, setOpen);

  },[])


  const resendCode = () => {
    setMessage("Sending Email");
    setResendEmail(false);

    sendReservationVerificationCode(setMessage, setResendEmail, setOpen);

  }


  const handleClose = () => {
    setOpen(false);
  };



  const action = (

    <React.Fragment>
      {resendEmail &&  <button onClick={resendCode} className="send-email">Resend</button>}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
       
        <CloseIcon fontSize="small" />
        
      </IconButton>
      
    </React.Fragment>

  );


  return (
    <section className="create-reservation-last">

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
        sx={{color: "#ED4962"}}
      />

      <h2>booking a reservation</h2>
      <p>almost there</p>

      <article className="form-container">
        <ProgressLine finished={"circle1-bold circle2-bold circle3-bold"}/>
        <p className="form-message">we have sent a code to your email</p>
        <LastStepForm
          setMessage={setMessage}
          setOpen={setOpen}
        />
      </article>

    </section>
  )
}

const LastStepForm = ({setMessage, setOpen}) => {
  
  const [code,setCode] = useState("");
  const navigate = useNavigate();

  return (

    <form className="create-reservation-form-last">

      <div className="code-input">
        <input 
          type="number"
          placeholder='Enter the code here'
          value={code}
          onChange={e => setCode(e.target.value)}
        />
      </div>

      <button 
        onClick={(e) => verifyReservationCode(e, code, navigate, setMessage, setOpen)} 
        className="save-reservation-details verify-btn">
          Verify
      </button>
    </form>
  )
}