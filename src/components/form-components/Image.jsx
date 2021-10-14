import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const {
      cardImage,
      onInputChange,
    } = this.props;

    return (
      <div>
        <label className="inputs" htmlFor="image">
          Imagem
          <input
            type="text"
            id="image"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            required
          />
        </label>
      </div>
    );
  }
}

export default Image;

Image.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
