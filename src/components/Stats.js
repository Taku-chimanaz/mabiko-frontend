import './../css/Stats.css';

export const Stats = ({availableCountries}) => {


    let branches = 0

    if(availableCountries.length > 0){
        availableCountries.forEach(country => {
            branches += country.branches.length;
        })
    }
 
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
