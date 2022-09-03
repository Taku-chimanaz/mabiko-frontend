import './css/Header.css';

export const Header = () => {

    const toggleSidebar = () => {
        const sidebar = document.querySelector("nav");

        sidebar.classList.toggle("show-side-bar");
    }
  return (
    
    <header>

        <div className="logo-container">
            <h3 className="logo">Mabiko</h3>
        </div>

        <nav>
            <button onClick={toggleSidebar} className="close-side-bar">X</button>
            <a href="/">Home</a>
            <a href="/">Reservations</a>
            <a href="/">Locations</a>
            <a href="/">About</a>
            <a href="/" className='contact'>Contact</a>
        </nav>

        <div onClick={toggleSidebar} className="burger">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </header>
  )
}
