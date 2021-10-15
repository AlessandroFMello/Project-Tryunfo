import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HasTrunfo from './HasTrunfo';

class Trunfo extends Component {
  render() {
    const {
      cardTrunfo,
      onInputChange,
      hasTrunfo,
    } = this.props;

    if (hasTrunfo) {
      return <HasTrunfo />;
    }

    return (
      <div>
        <label className="inputs" htmlFor="trunfo">
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
  hasTrunfo: PropTypes.bool.isRequired,
};
