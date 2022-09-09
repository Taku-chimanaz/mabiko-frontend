import './../css/Stats.css';

export const Stats = () => {
  return (
     
    <section className="stats">
        <Stat img={"time.png"} statValue={"since 2020"}/>
        <Stat img={"branches.png"} statValue={"24 branches"}/>
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
