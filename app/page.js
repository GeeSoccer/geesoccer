const rows = [

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

    <main>

      <header>

        <b>GeeSoccer</b>

        <span>Facts. Stats. Your Edge.</span>

      </header>

      <section className="hero">

        <small>BUNDESLIGA · MATCH CENTER</small>

        <h1>

          Borussia Dortmund <i>vs</i> Gegner

        </h1>

        <p>Nur echte, abgeschlossene Spiele · keine automatischen Prognosen</p>

      </section>

      <nav>

        <button>Letzte 5</button>

        <button>Letzte 10</button>

        <button>Gesamt</button>

        <button>Heim</button>

      </nav>

      <section className="card">

        <h2>Form & Tore</h2>

        <div className="kpis">

          <div><strong>3</strong><span>Spiele</span></div>

          <div><strong>8:2</strong><span>Tore</span></div>

          <div><strong>2/3</strong><span>Over 2.5</span></div>

        </div>

      </section>

      <section className="card">

        <h2>Goal Trends</h2>

        {rows.map((r) => (

          <div className="row" key={r[0]}>

            <span>{r[0]}</span>

            <b>{r[1]}</b>

            <em>{r[2]}</em>

          </div>

        ))}

        <p className="hint">

          Jede Quote soll später die exakten Spiele als Nachweis öffnen.

        </p>

      </section>

      <section className="card gee">

        <small>MANUELL · KLAR GETRENNT VON DEN DATEN</small>

        <h2>Gee Analysis</h2>

        <p>Hier kommt deine persönliche Spielanalyse hinein.</p>

        <h3>Gee Prognose</h3>

        <p className="pick">Noch keine Prognose veröffentlicht.</p>

      </section>

      <footer>Daten sind Daten – Gee ist Gee. ⚽</footer>

    </main>

  );

}
