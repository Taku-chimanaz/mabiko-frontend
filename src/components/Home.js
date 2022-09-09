import { Header } from "./Header";
import { Main } from "./Main";
import { Stats } from "./Stats";
import { Locations } from "./Locations";
import { AboutUs } from "./About-Us";
import { ContactUs } from './ContactUs'

export const Home = () => {

  return (
    
    <>
        <Header/>
        <Main/>
        <Stats/>
        <Locations/>
        <AboutUs/>
        <ContactUs/>
    </>
  )
}

