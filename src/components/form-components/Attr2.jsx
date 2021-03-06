import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attr2 extends Component {
  render() {
    const {
      cardAttr2,
      onInputChange,
    } = this.props;

    return (
      <div>
        <label className="inputs" htmlFor="attr2">
          Atributo 2
          <input
            type="number"
            id="attr2"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min="0"
            max="90"
            maxLength="90"
            required
          />
        </label>
      </div>
    );
  }
}

export default Attr2;

Attr2.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
