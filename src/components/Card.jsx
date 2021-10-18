import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      // isSaveButtonDisabled,
      // onInputChange,
      // onSaveButtonClick,
    } = this.props;

    return (
      <section className="card">
        <div className="name-card">
          <h2 data-testid="name-card">{ cardName }</h2>
        </div>
        <div className="image-card">
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <div>
          <h3
            data-testid="description-card"
          >
            { cardDescription }
          </h3>
        </div>
        <div>
          <h3
            data-testid="attr1-card"
            className="attr-card"
          >
            Atributo 1:
            { cardAttr1 }
          </h3>
        </div>
        <div>
          <h3
            data-testid="attr2-card"
            className="attr-card"
          >
            Atributo 2:
            { cardAttr2 }
          </h3>
        </div>
        <div>
          <h3
            data-testid="attr3-card"
            className="attr-card"
          >
            Atributo 3:
            { cardAttr3 }
          </h3>
        </div>
        <div>
          <h3 data-testid="rare-card">{ cardRare }</h3>
        </div>
        {
          cardTrunfo
            ? <h3 data-testid="trunfo-card"> Super Trunfo </h3>
            : <p />
        }
      </section>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  // isSaveButtonDisabled: PropTypes.bool.isRequired,
  // onInputChange: PropTypes.func.isRequired,
  // onSaveButtonClick: PropTypes.func.isRequired,
};
