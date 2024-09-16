//importo React & il foglio di stile
import React from "react";
import "./counter.styles.scss";

//creo il componente che estende il componente base dalla libreria React
class Counter extends React.Component {
  //metodo constructor con il parametro props
  constructor(props) {
    //metodo super per passare il parametro props al componente che sto estendendo: React.Component
    super(props);

    //definisco lo stato come oggetto di Js, utilizzando this per accedere alle props
    this.state = {};
  }

  //metodo FACOLTATIVO -> qualora il componente dovesse essere aggiornato con nuove props o un nuovo state
  shouldComponentUpdate(nextProps, nextState){

    //controllo
    //SE il testo del nuovo stato è diverso dal testo della props
      //ALLORA ritorna TRUE (aggiorna il componente)
    //ALTRIMENTI ritorna FALSE (lascia il componente come è)
    if(nextState.testo !== this.props.testo){
      return true
    }else{
      return false
    }
  }

  //metodo componentWillUnmount -> dismette il componente
  componentWillUnmount(){
    console.log('componente smontato')
  }

  //metodo componentDidUpdate -> permette di aggiornare lo stato del componente
  componentDidUpdate(){
    console.log('componente aggiornato');

  }

  //metodo componentDidMount (invocato SOLO alla prima esecuzione del componente)
  componentDidMount(){
    console.log('componente montato');
  }


  //definisco la grafica tramite il metodo render
  //al cui interno definisco i tag
  render() {
    return (
    <div className="counter">

    </div>
    )
  }
}

//esporto il componente Counter
export default Counter;
