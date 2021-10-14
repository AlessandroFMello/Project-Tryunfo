import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Name extends Component {
  render() {
    const {
      cardName,
      onInputChange,
    } = this.props;

    return (
      <div>
        <label className="inputs" htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            required
          />
        </label>
      </div>
    );
  }
}

export default Name;

Name.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
