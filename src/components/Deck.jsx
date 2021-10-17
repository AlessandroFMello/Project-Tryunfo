import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeckCard from './DeckCard';

class Deck extends Component {
  render() {
    const { deck, deleteCardByName, hasFilter, filteredDeck } = this.props;

    const myMap = (chosenDeck) => (
      chosenDeck.map((card) => (
        <DeckCard
          key={ card.cardName }
          card={ card }
          deleteCardByName={ deleteCardByName }
        />))
    );

    if (hasFilter) {
      return (
        <div>
          <section>
            {
              myMap(filteredDeck)
            }
          </section>
        </div>
      );
    }
    return (
      <div>
        <section>
          {
            myMap(deck)
          }
        </section>
      </div>
    );
  }
}

export default Deck;

Deck.propTypes = {
  deck: PropTypes.node.isRequired,
  deleteCardByName: PropTypes.func.isRequired,
  filteredDeck: PropTypes.node.isRequired,
  hasFilter: PropTypes.bool.isRequired,
};
