import React from "react";
import SingleUser from "../singleUser/singleUser.component";

import './users.styles.scss';


class Users extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            //definisco lo state di Users
            users: []
        }
    }

    //chiamata API all'avvio del componente
    componentDidMount(){
        //metodo fetch('linkPath') per il recupero dei dati dalle API
        //è una PROMISE -> chiamata asincrona che promette di restituire un determinato esito al suo termine
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json()) //risposta attesa in stringa, trasformata in oggetto JSON
          //valori attesi che vanno ad aggiornare lo state
          .then((values) =>
            this.setState({
              users: values,
            })
          ); 
        
    }

    render(){
        //verifico che la chiamata sia andata a buon fine
        // console.log(this.state.users);

        return(
            <div className="users">
                {/* rendering condizionale con operatore ternario per ciclare l'oggetto */}
                {/* SE la lunghezza (length) delle chiavi (keys) dell'oggetto della chiamata (Object), quindi nell'oggetto state.users è diverso da 0,
                    ALLORA (?) mappiamo l'oggetto users per ciclarne i valori
                    ALTRIMENTI (:) null (non stampare nulla) */}
                {
                Object.keys(this.state.users).length !== 0 ?
                this.state.users.map((value) =>(
                    //ottimizzo il codice
                    //creo un componente in cui identifico id e name,
                    //da passare come props , ponendo come chiave di lettura (key) l'id di riferimento
                    <SingleUser id={value.id} name={value.name} key={value.id} />
                ))
                : null
                }
            </div>
        )
    }
}

export default Users;