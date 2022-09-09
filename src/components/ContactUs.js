import './../css/ContactUs.css';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const ContactUs = () => {


    return (

        <section className="contact-us">

            <div className="contact-us-header">
                <div className="line"></div>
                <h2>Contact Us</h2>
            </div>

            <div className="contact-us-content">

                <div className="contact-form-container">

                    <form className="contact-form">

                        <div className="name-input-container">
                            <input type="text" placeholder="Enter your name"/>
                        </div>

                        <div className="email-input-container">
                            <input type="email" placeholder="Enter your email"/>
                        </div>

                        <div className="message-input-container">
                            <textarea></textarea>
                        </div>

                        <button className="submit-message-btn">Submit Message</button>

                    </form>
                </div>

                <div className="socials-container">

                    <ul>

                        <li>
                            <PhoneIcon/> <span>+263 000 000 000</span>
                        </li>

                        <li>
                            <WhatsAppIcon/>  <span>+263 000 000 000</span>
                        </li>

                        <li>
                            <TwitterIcon/> <span> @mabikorest</span>
                        </li>

                        <li>
                            <InstagramIcon/> <span> @mabikorest</span>
                        </li>

                    </ul>
                </div>

            </div>
        </section>
    )
}