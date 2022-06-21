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
      filteredDeck: [],
      hasFilter: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.activateSaveButton = this.activateSaveButton.bind(this);
    this.checkAttrValues = this.checkAttrValues.bind(this);
    this.checkIfAllFulfilled = this.checkIfAllFulfilled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCardByName = this.deleteCardByName.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.filterByRarity = this.filterByRarity.bind(this);
    this.filterByTrunfo = this.filterByTrunfo.bind(this);
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

  filterByName = ({ target }) => {
    const { value } = target;
    const { deck } = this.state;
    // const filteredDeck = [];
    // deck.forEach((card) => {
    //   if (card.cardName.toLowerCase().includes(value.toLowerCase())) {
    //     filteredDeck.push(card);
    //   }
    //   this.setState({
    //     hasFilter: true,
    //     filteredDeck: [...filteredDeck],
    //   });
    // });
    const filteredDeck = deck
      .filter((card) => (
        card.cardName.toLowerCase()
          .includes(value.toLowerCase())));
    this.setState({
      hasFilter: true,
      filteredDeck: [...filteredDeck],
    });
    if (!value) {
      this.setState({ hasFilter: false });
    }
  }

  filterByRarity = ({ target }) => {
    const { value } = target;
    const { deck } = this.state;
    const filteredDeck = [];

    deck.forEach((card) => {
      if (card.cardRare.toLowerCase() === value.toLowerCase()) {
        filteredDeck.push(card);
      }
      this.setState({
        hasFilter: true,
        filteredDeck: [...filteredDeck],
      });
    });
    if (value === 'todas') {
      this.setState({ hasFilter: false });
    }
  }

  filterByTrunfo = ({ target }) => {
    const { checked } = target;
    const { deck, hasTrunfo } = this.state;
    const trunfo = deck.find((card) => card.cardTrunfo === true);

    if (checked && hasTrunfo) {
      this.setState({
        filteredDeck: [trunfo],
        hasFilter: true,
      });
    }

    if (!checked) {
      this.setState({ hasFilter: false });
    }
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
        <h1>Deck</h1>
        <form className="filter-form">
          Filtros de busca
          <label className="inputs" htmlFor="name-filter">
            <input
              type="text"
              id="name-filter"
              data-testid="name-filter"
              placeholder="Nome da Carta"
              onChange={ this.filterByName }
            />
          </label>
          <select
            id="rare"
            data-testid="rare-filter"
            name="cardRare"
            onChange={ this.filterByRarity }
          >
            <option value="" disabled selected hidden>Raridade</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
            <option value="todas">Todas</option>
          </select>
          <label htmlFor="trunfo-filter">
            Trunfo
            <input
              data-testid="trunfo-filter"
              id="trunfo-filter"
              type="checkbox"
              onChange={ this.filterByTrunfo }
            />
          </label>
        </form>
        <section className="deck-section">
          <Deck
            { ...this.state }
            deleteCardByName={ this.deleteCardByName }
          />
        </section>
      </div>
    );
  }
}

export default App;
