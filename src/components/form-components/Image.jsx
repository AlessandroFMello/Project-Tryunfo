import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div>
        <label htmlFor="image">
          Imagem
          <input type="text" id="image" data-testid="image-input" />
        </label>
      </div>
    );
  }
}

export default Image;
