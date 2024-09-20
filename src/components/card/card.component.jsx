//
//
//importo il componente react & il foglio di stile scss
import React from "react";

import './card.styles.scss'; //per i fogli di stile/immagini è necessario inserire l'estensione

//importo il componente counter
import Counter from "../counter/counter.component";

//importo il componente users
import Users from "../users/users.commponent";

//creazione funzione del componente Card
//
//MODO 1
//aggiungo il parametro props per collegare l'attributo testo del componente in App.js 
//const Card = (props) => {...}
//
//MODO 2
//aggiungo il parametro come una destrutturazione scrivendo direttamente l'attributo testo presente nel componente in App.js
//const Card = ({testo}) => {...}
//
//aggiungo il contenuto del componente in App.js come children,
//sia come parametro sia nel componente stesso
const Card = ({testo, children}) => {

    return (
      //aggiungo il tag FRAGMENT per aggiungere all'interno del componente altri tag
      // <React.Fragment>
        <div className="card">
          {/* SCRIVO NEL COMPONENTE */}
          <h1>
            {/* invoco il parametro props a cui associo l'attributo testo presente in App.js */}
            {/* {props.testo} */}
            {/**/}
            {/**/}
            {/* invoco l'oggetto destrutturato */}
            {testo}
          </h1>

          {/* NB -> se non fosse stato destrutturato il parametro,
                allora l'invocazione sarebbe dovuta avvenire con: {props.children}*/}
          {/* {children} */}

          {/**/}
          {/* INSERISCO IL COMPONENTE CONTATORE */}
          <Counter />

          <br />

          {/* INSERISCO IL COMPONENTE USERS */}
          <Users />
        </div>
      //<h1>Ciao</h1>
      //</React.Fragment>
    );
}

//esporto il componente Card
export default Card
