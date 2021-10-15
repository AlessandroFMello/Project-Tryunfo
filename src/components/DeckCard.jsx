import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeckCard extends Component {
  render() {
    const { card } = this.props;
    return (
      <div className="section-board">
        <h3>{ card.cardName }</h3>
        <img src={ card.cardImage } alt={ card.cardName } />
        <h3>{ card.cardDescription }</h3>
        <h3>{ card.cardAttr1 }</h3>
        <h3>{ card.cardAttr2 }</h3>
        <h3>{ card.cardAttr3 }</h3>
        <h3>{ card.cardRare }</h3>
        {
          card.cardTrunfo
            ? <p data-testid="trunfo-card"> Super Trunfo </p>
            : <p />
        }
      </div>
    );
  }
}

export default DeckCard;

DeckCard.propTypes = {
  card: PropTypes.node.isRequired,
};
