const stats = [

  ["Over 0.5", "3/3", "100%"],

  ["Over 1.5", "3/3", "100%"],

  ["Over 2.5", "2/3", "67%"],

  ["Over 3.5", "1/3", "33%"],

  ["Over 4.5", "1/3", "33%"],

  ["Over 5.5", "0/3", "0%"],

  ["Over 6.5", "0/3", "0%"],

  ["BTTS", "1/3", "33%"],

  ["Clean Sheets", "2/3", "67%"],

];

export default function Home() {

  return (

    <main className="page">

      <header className="hero">

        <div className="brand">GEESOCCER ⚽</div>

        <div className="league">BUNDESLIGA</div>

        <h1>Facts. Stats. Your Edge.</h1>

        <p>Nur echte Spiele. Keine automatischen Prognosen.</p>

      </header>

      <section className="match">

        <span>Bundesliga</span>

        <h2>Borussia Dortmund</h2>

        <div className="vs">VS</div>

        <h2>FC Bayern München</h2>

      </section>

      <section className="card">

        <h3>FORM</h3>

        <div className="buttons">

          <button>Letzte 5</button>

          <button>Letzte 10</button>

          <button>Heim</button>

          <button>Auswärts</button>

        </div>

      </section>

      <section className="card">

        <h3>TOR-STATISTIKEN</h3>

        {stats.map(([name, count, percent]) => (

          <div className="stat" key={name}>

            <span>{name}</span>

            <strong>{count}</strong>

            <b>{percent}</b>

          </div>

        ))}

      </section>

      <section className="card">

        <h3>HEAD TO HEAD</h3>

        <p>Direkte Duelle der beiden Teams aus abgeschlossenen Spielen.</p>

      </section>

      <section className="gee">

        <div className="geeTitle">GEE ANALYSIS</div>

        <p>

          Daten sind Daten – <strong>Gee ist Gee.</strong>

        </p>

        <div className="pick">

          <small>GEE PROGNOSE</small>

          <strong>Dortmund verliert nicht + Over 2.5</strong>

        </div>

      </section>

      <footer>

        Historische Statistiken • Keine automatische Wettprognose

      </footer>

    </main>

  );

}
