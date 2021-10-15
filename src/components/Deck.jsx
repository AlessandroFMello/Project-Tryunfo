import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeckCard from './DeckCard';

class Deck extends Component {
  render() {
    const { deck } = this.props;
    return (
      <div>
        <h1>Deck</h1>
        <section>
          {
            deck.map((card) => <DeckCard key={ card.cardName } card={ card } />)
          }
        </section>
      </div>
    );
  }
}

export default Deck;

Deck.propTypes = {
  deck: PropTypes.node.isRequired,
};
