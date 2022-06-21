import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeckCard extends Component {
  render() {
    const { card, deleteCardByName } = this.props;
    return (
      <div className="card">

        <div className="name-card">
          <h3>{ card.cardName }</h3>
        </div>
        <div className="image-card">
          <img src={ card.cardImage } alt={ card.cardName } />
        </div>
        <h3>{ card.cardDescription }</h3>
        <h3 className="attr-card">{ card.cardAttr1 }</h3>
        <h3 className="attr-card">{ card.cardAttr2 }</h3>
        <h3 className="attr-card">{ card.cardAttr3 }</h3>
        <h3>{ card.cardRare }</h3>
        {
          card.cardTrunfo
            ? <p data-testid="trunfo-card"> Super Trunfo </p>
            : <p />
        }
        <button
          type="button"
          id={ card.cardName }
          data-testid="delete-button"
          onClick={ deleteCardByName }
        >
          Delete
        </button>
      </div>
    );
  }
}

export default DeckCard;

DeckCard.propTypes = {
  card: PropTypes.node.isRequired,
  deleteCardByName: PropTypes.func.isRequired,
};
