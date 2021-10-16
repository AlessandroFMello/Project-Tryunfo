import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
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
    this.deleteCardByName = this.deleteCardByName.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.activateSaveButton); // Cuidar assincronicidade
  }

  deleteCardByName = ({ target }) => {
    const { id } = target;
    const { deck } = this.state;
    deck.forEach((card) => {
      if (card.cardTrunfo === true && card.cardName === id) {
        this.setState({
          hasTrunfo: false,
        });
      }
    });
    const newDeck = deck.filter((card) => card.cardName !== id);
    this.setState({
      deck: [...newDeck],
    });
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
            />
          </section>
          <section className="section-board">
            <Card { ...this.state } />
          </section>
        </div>
        <section className="deck-section">
          <Deck { ...this.state } deleteCardByName={ this.deleteCardByName } />
        </section>
      </div>
    );
  }
}

export default App;
