import { backendUrl } from "../data";
import { handleResponses } from "./general";

export const sendVoucherCodeToEmail = (voucherCode, email, setMessage, setOpen) => {

    fetch(`${backendUrl}/api/reservation/send-voucher-to-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            voucherCode,
            email
        })
    })
    .then(res => res.json())
    .then(result => {
        
        if(result.message === "Something went wrong" && result.err === "getaddrinfo ENOTFOUND smtp.gmail.com"){
            handleResponses(
                "verify code",
                setMessage,
                null,
                setOpen,
                "Email not sent,check connectivity",
                null,
                true
            )
        }else if(result.message === "request successful"){
            handleResponses(
                "verify code",
                setMessage,
                null,
                setOpen,
                "Email was sent",
                null,
                true
            )
        }
    })
    .catch(() => {
        
        handleResponses(
            "verify code",
            setMessage,
            null,
            setOpen,
            "Request not sent,try again later",
            null,
            true
        )
    })
}