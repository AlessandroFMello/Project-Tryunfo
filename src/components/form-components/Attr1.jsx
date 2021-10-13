import React, { Component } from 'react';

class Attr1 extends Component {
  render() {
    return (
      <div>
        <label htmlFor="attr1">
          Atributo 1
          <input type="number" id="attr1" data-testid="attr1-input" />
        </label>
      </div>
    );
  }
}

export default Attr1;
