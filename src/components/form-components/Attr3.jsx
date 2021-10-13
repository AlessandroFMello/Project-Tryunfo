import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attr3 extends Component {
  render() {
    const {
      cardAttr3,
      onInputChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="attr3">
          Atributo 3
          <input
            type="number"
            id="attr3"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

export default Attr3;

Attr3.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
