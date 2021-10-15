import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attr1 extends Component {
  render() {
    const {
      cardAttr1,
      onInputChange,
    } = this.props;

    return (
      <div>
        <label className="inputs" htmlFor="attr1">
          Atributo 1
          <input
            type="number"
            id="attr1"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            maxLength="90"
            min="0"
            max="90"
            required
          />
        </label>
      </div>
    );
  }
}

export default Attr1;

Attr1.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
