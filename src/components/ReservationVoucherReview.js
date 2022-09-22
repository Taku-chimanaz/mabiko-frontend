import './../css/ReservationVoucherReview.css'
import { sendVoucherCodeToEmail } from '../js/sendVoucherCodeToEmail';
import React, { useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const ReservationVoucherReview = () => {

  const [message, setMessage] = useState("Emailing Voucher Code");
  const [open, setOpen] = useState(false);
  const [resendEmail, setResendEmail] = useState(false)

  const handleClose = () => {
    setOpen(false);
  };


  const action = (
    <React.Fragment>
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

     <section className='reservation-voucher-review'>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
        sx={{color: "#ED4962"}}
      /> 

      <ReservationContent
        setMessage={setMessage}
        setOpen={setOpen}
      />
     </section>
  )

}

const ReservationContent = ({setMessage, setOpen}) => {

  const {email, voucherCode} = JSON.parse(localStorage.getItem("reservation"));

  return (

    <article className="reservation-content">
          
      <h2 className="reservation-content-header">
        Booking process was a success
      </h2>

      <label className='voucher-label' htmlFor="voucher code">Voucher Code</label>

      <div className="voucher-code-container">
          <input 
            type="text"
            value={voucherCode}
            readOnly
          />
      </div>

      <p className="reservation-content-para">
        The above code is used to track your reservation.You can copy it somewhere or click the the button below to send it to your email.
      </p>

      <div className="buttons-container">
        <button onClick={() => sendVoucherCodeToEmail(voucherCode, email, setMessage, setOpen)} className="email-code">
          Email Code
        </button>

        <a href="/" className="home-link">
          Go Home
        </a>
      </div>
    </article>

  )
}
