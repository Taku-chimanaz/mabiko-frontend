import  './../css/Main.css';

export const Main = () => {

    return (

        <main>

            <article className="welcome-content">

                <h1 className="welcome-content__header">
                    Mabiko Restaurant
                </h1>

                <p className="welcome-content__message">
                    Welcome to logo where we put the desire of your customers at heart.Try our services and we promise you that you won't regret it.Welcome to logo where we put the desire of your customers at heart.Try our services and we promise you that you won't regret it.
                </p>

                <div className="reservations-btn-container">
                    <a href="/create-reservation" className="book-reservation">Book Reservation</a>
                    <a href="/" className="track-reservation">Track Reservation</a>
                </div>

            </article>

            <div className="illustration-container">
                <img src="./People-Eating-At-Restaurant.jpg" alt="People Eating At A Restaurant" />
            </div>
            
        </main>
    )
}