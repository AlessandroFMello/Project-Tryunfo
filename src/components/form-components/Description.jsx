import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <div>
        <label htmlFor="description">
          Descrição
          <input type="textarea" id="description" data-testid="description-input" />
        </label>
      </div>
    );
  }
}

export default Description;
