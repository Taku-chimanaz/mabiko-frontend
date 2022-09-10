import './../css/Stats.css';
import { HomeContext } from './Home';
import { useContext } from 'react';

export const Stats = () => {

    
    const countries = useContext(HomeContext)
    
    let branches = 0

    if(countries.length > 0){
        countries.forEach(country => {
            branches += country.branches.length;
        })
    }
    

    console.log(branches)
    
  return (
     
    <section className="stats">
        <Stat img={"time.png"} statValue={"since 2020"}/>
        <Stat img={"branches.png"} statValue={`${branches} branches`}/>
        <Stat img={"star.png"} statValue={"4 star"}/>
    </section>
  )
}

const Stat = ({img, statValue}) => {

    return (
        <article className="stat">

            <div className="stat-img-container">
                <img src={`./${img}`} alt="clock" />
            </div>

            <p className="stat-value">
                {statValue}
            </p>

        </article>
    )
}
