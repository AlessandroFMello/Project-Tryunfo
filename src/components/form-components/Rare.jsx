import React, { Component } from 'react';

class Rare extends Component {
  render() {
    return (
      <div>
        Raridade
        <select name="rare" id="rare" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </div>
    );
  }
}

export default Rare;
