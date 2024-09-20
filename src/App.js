//
//
// import logo from './logo.svg';
import "./App.css";
import Card from "./components/card/card.component"; //importo il componente Card
import ErrorBoundaries from "./components/errorBoundaries/errorBoundaries.component"; //importo il componente Error

// import Portal from "./components/portal/portal.component";

function App() {
  //dichiaro una variabile per stamparla nel componente
  // const test = 'Ciao';

  //dichiaro una variabile in cui salvo il nome di una classe dinamica da assegnare al componente
  // const myClass = 'my-header';

  // return (
  //   <div className="App">
  //     concateno la classe myClass usando: {` classeStatica ${classeDinamica}`} */}
  //     {/* <header className={`App-header ${myClass}`}>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload. <br/>
  //         {/* stampo in pagina il valore della variabile test, uusando: {} */}
  //         {test} a tutti.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div className="App">
      {/* Inserisco il componente ErrorBoundaries che racchiuderà il componente Card */}
      <ErrorBoundaries>
        {/* inserisco il componente Card */}
        {/* aggiungo l'attributo testo con una stringa e poi nel componente lo invoco per essere stampato in pagina */}
        <Card testo="Contatore" />
        {/**/}
        {/**/}
        {/* modifico il componete da selfclosed a TAG con Contenuto */}
        {/* <Card testo="Ciao">
        <button type="submit">
          Send
        </button>
      </Card> */}

        {/* Aggiungo il Portale */}
        {/* <Portal/> */}
      </ErrorBoundaries>
    </div>
  );
}

export default App;
