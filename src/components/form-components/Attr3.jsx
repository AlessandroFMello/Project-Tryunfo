import React, { Component } from 'react';

class Attr3 extends Component {
  render() {
    return (
      <div>
        <label htmlFor="attr3">
          Atributo 3
          <input type="number" id="attr3" data-testid="attr3-input" />
        </label>
      </div>
    );
  }
}

export default Attr3;
