import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trunfo extends Component {
  render() {
    const {
      cardTrunfo,
      onInputChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="trunfo">
          Trunfo
          <input
            type="checkbox"
            id="trunfo"
            data-testid="trunfo-input"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

export default Trunfo;

Trunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
