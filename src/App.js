import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Trunfo from './components/form-components/Trunfo';
import HasTrunfo from './components/form-components/HasTrunfo';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      deck: [],
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.activateSaveButton = this.activateSaveButton.bind(this);
    this.checkAttrValues = this.checkAttrValues.bind(this);
    this.checkIfAllFulfilled = this.checkIfAllFulfilled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.renderTrunfoHTML = this.renderTrunfoHTML.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.activateSaveButton); // Cuidar assincronicidade
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    if (cardTrunfo) this.setState({ hasTrunfo: true });

    this.setState((previousState) => {
      const card = { ...previousState };
      delete card.deck;

      if (!card.cardTrunfo) {
        delete card.hasTrunfo;
      }

      return {
        deck: [...previousState.deck, card],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      };
    });
  }

  activateSaveButton = () => {
    // verificar atributos
    // verificar se estão preenchidos todos os campos
    if (this.checkAttrValues() && this.checkIfAllFulfilled()) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  checkAttrValues = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxValue = 90;
    const minValue = 0;
    const maxSum = 210;

    const checkMinAttrValues = Number(cardAttr1) >= minValue
      && Number(cardAttr2) >= minValue
      && Number(cardAttr3) >= minValue;

    const checkMaxAttrValues = Number(cardAttr1) <= maxValue
      && Number(cardAttr2) <= maxValue
      && Number(cardAttr3) <= maxValue;

    const sum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxSum;

    return (checkMinAttrValues && checkMaxAttrValues && sum);
  }

  checkIfAllFulfilled = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;

    if (cardName
      && cardDescription
      && cardImage
      && cardRare) {
      return true;
    } return false;
  }

  renderTrunfoHTML = () => {
    const { hasTrunfo, cardTrunfo } = this.state;
    if (hasTrunfo) {
      return <HasTrunfo />;
    }
    return (
      <Trunfo
        cardTrunfo={ cardTrunfo }
        onInputChange={ this.onInputChange }
      />
    );
  }

  render() {
    return (
      <div className="main-div">
        <h1>Tryunfo</h1>
        <div className="main-section">
          <section className="section-board">
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              renderTrunfoHTML={ this.renderTrunfoHTML }
            />
          </section>
          <section className="section-board">
            <Card { ...this.state } />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
