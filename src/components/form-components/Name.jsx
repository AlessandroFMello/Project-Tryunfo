import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            data-testid="name-input"
            value={ cardName }
          />
        </label>
      </div>
    );
  }
}

export default Name;
