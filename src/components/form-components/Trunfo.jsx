import React, { Component } from 'react';

class Trunfo extends Component {
  render() {
    return (
      <div>
        <label htmlFor="trunfo">
          Trunfo
          <input type="checkbox" id="trunfo" data-testid="trunfo-input" />
        </label>
      </div>
    );
  }
}

export default Trunfo;
