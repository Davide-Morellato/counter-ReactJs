//importo React & il foglio di stile
import React from "react";
import "./counter.styles.scss";

//creo il componente che estende il componente base dalla libreria React
class Counter extends React.Component {
  //metodo constructor con il parametro props
  constructor(props) {
    //metodo super per passare il parametro props al componente che sto estendendo: React.Component
    super(props);

    //
    //MODO 1 -> invoco la funzione Increase per legarla all'evento onClick
    // this.IncreaseNumber = this.IncreaseNumber.bind(this)

    //definisco lo stato come oggetto di Js, utilizzando this per accedere alle props
    this.state = {
      //dichiaro una proprietà iniziale
      number: 0,
    };
  }

  //
  // * LIFECYCLE * //
  //
  // //metodo FACOLTATIVO -> qualora il componente dovesse essere aggiornato con nuove props o un nuovo state
  // shouldComponentUpdate(nextProps, nextState){
  //
  //   //controllo
  //   //SE il testo del nuovo stato è diverso dal testo della props
  //     //ALLORA ritorna TRUE (aggiorna il componente)
  //   //ALTRIMENTI ritorna FALSE (lascia il componente come è)
  //   if(nextState.testo !== this.props.testo){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  //
  // //metodo componentWillUnmount -> dismette il componente
  // componentWillUnmount(){
  //   console.log('componente smontato')
  // }
  //
  // //metodo componentDidUpdate -> permette di aggiornare lo stato del componente
  // componentDidUpdate(){
  //   console.log('componente aggiornato');
  //
  // }
  //
  // //metodo componentDidMount (invocato SOLO alla prima esecuzione del componente)
  // componentDidMount(){
  //   console.log('componente montato');
  // }

  //
  //dichiaro una funzione per l'evento onClick di Increase
  //
  //MODO 1
  // IncreaseNumber(){
  //   console.log(this.state.number)
  // }
  //
  //MODO 2
  //arrow function
  IncreaseNumber = () => {
    // console.log(this.state.number);

    //imposto l'incremento aggiornando la proprietà number, nello state, con il metodo setState()
    this.setState({
      number: this.state.number + 1,
    });
  };

  //dichiaro una funzione per l'evento onClick di Decrease
  DecreaseNumber() {
    // console.log(this.state.number);
    //
    //controllo
    //SE number > 0
    //ALLORA imposto il decremento aggiornando la proprietà number, nello state, con il metodo setState()
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
      });
    }
  }

  //definisco la grafica tramite il metodo render
  //al cui interno definisco i tag
  render() {
    return (
      <div className="counter">
        <div className="number_counter">
          {/* aggiungo la proprietà dello state */}
          {this.state.number}
        </div>

        <div className="wrapper_buttons">
          {/* aggiungo l'evento onClick per decrementare il valore di number */}
          {/* invoco la funzione nell'evento tramite un'arrow function */}
          <button
            type="submit"
            onClick={() => this.DecreaseNumber()}
            className="button_counter"
          >
            Decrease
          </button>
          
          {/* aggiungo l'evento onClick per incrementare il valore di number */}
          <button
            type="submit"
            onClick={this.IncreaseNumber}
            className="button_counter"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

//esporto il componente Counter
export default Counter;
