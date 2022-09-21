import { backendUrl } from "../data";


const details = JSON.parse(localStorage.getItem("details"));
let action = "";


export const sendReservationVerificationCode = (setMessage, setResendEmail, setOpen) => {

    action = "send code";

    if(details.email === undefined || details.email === ""){
      setMessage("Please provide email");
      return
    }

    fetch(`${backendUrl}/api/reservation/send-reservation-code`,{
       method: "POST",
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify({email: details.email})
    })
    .then(res => res.json())
    .then(result => {
       
      if(result.message === "Something went wrong"){

        handleResponses(
          action,
          setMessage,
          setResendEmail,
          setOpen,
          result.message,
          true,
          true
        )
        
      }else {
        handleResponses(
          action,
          setMessage,
          setResendEmail,
          setOpen,
          result.message,
          false,
          true
        )
      }
    })
    .catch(err => {
        handleResponses(
          action,
          setMessage,
          setResendEmail,
          setOpen,
          "Could not send request",
          true,
          true
        )
    })
}

export const verifyReservationCode = (e, code, navigate, setMessage, setOpen) => {

    e.preventDefault();
    action = "verify code"
    //  sending request

    fetch(`${backendUrl}/api/reservation/verify-reservation`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({details, code})
    })
    .then(res => res.json())
    .then(result => {

      if(result.message === "request successful"){
        navigate('/reservation-details')
      }else {
        handleResponses(
          action,
          setMessage,
          null,
          setOpen,
          result.err,
          null,
          true
        )
      }
    })
    .catch(() => {
      handleResponses(
        action,
        setMessage,
        null,
        setOpen,
        "Failed to send request",
        null,
        true
      )
    })


}

const handleResponses = (action, setMessage, setResendEmail, setOpen, message, resendEmail, open)=>{

   switch(action){

    case "send code":
      setMessage(message);
      setResendEmail(resendEmail);
      setOpen(open);
      break;
    
    case "verify code":
      setMessage(message)
      setOpen(true);
      break;
    default:
      break;
   }

}