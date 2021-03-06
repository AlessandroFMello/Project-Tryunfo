import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const {
      cardDescription,
      onInputChange,
    } = this.props;
    return (
      <div>
        <label className="inputs" htmlFor="description">
          Descrição
          <input
            type="textarea"
            id="description"
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            required
          />
        </label>
      </div>
    );
  }
}

export default Description;

Description.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
