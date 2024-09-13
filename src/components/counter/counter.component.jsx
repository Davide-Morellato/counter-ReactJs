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
