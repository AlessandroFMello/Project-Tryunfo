import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rare extends Component {
  render() {
    const {
      cardRare,
      onInputChange,
    } = this.props;

    return (
      <div className="inputs">
        Raridade
        <select
          id="rare"
          data-testid="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          required
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </div>
    );
  }
}

export default Rare;

Rare.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
