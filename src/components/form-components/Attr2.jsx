import React, { Component } from 'react';

class Attr2 extends Component {
  render() {
    return (
      <div>
        <label htmlFor="attr2">
          Atributo 2
          <input type="number" id="attr2" data-testid="attr2-input" />
        </label>
      </div>
    );
  }
}

export default Attr2;
