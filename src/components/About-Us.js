import './../css/About-Us.css';

export const AboutUs = () => {
  return (
    
    <section className="about-us">

        <div className="about-us-header">
        <div className="line"></div>
            <h2>
                about us
            </h2>
        </div>

        <div className="about-us-img-container">
            <img src="./about-us.svg" alt="illustration of people" />
        </div>

        <article className="about-us-content">
           

            <p className="about-us-para">
                Mabiko Restaurant  is a 4 Star restaurant that was in 2020 in Zimbabwe.We have expanded our empire to other African countries that include South Africa and Nigeria.Our sole purpose is to provide an exclusive experience while having a meal at our restaurant with your spouse,family or potetntial business partners
            </p>

            <a href="/" className="make-reservation">Book Reservation</a>
        </article>
    </section>
  )
}
