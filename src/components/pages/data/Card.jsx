import React, { Component } from "react";
import axios from "axios";
import "./Card.css";

class Card extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const dataApi = await axios.get("http://localhost:5000/data");

    this.setState({ data: dataApi.data[0].content });
  };

  showData = () => {
    const { data } = this.state;
    return data.map((data, idx) => {
      return (
        <div key={idx} className="container">
          <h4>{data.cartaoMascarado}</h4>
          <h4>{data.descricaoAbreviada}</h4>
          <h4>R$ {data.valorBRL}</h4>
        </div>
      );
    });
  };

  render() {
    return <div>{this.showData()}</div>;
  }
}

export default Card;
