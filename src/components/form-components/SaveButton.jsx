import React, { Component } from 'react';

class SaveButton extends Component {
  render() {
    return (
      <div id="save-button">
        <button type="submit" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default SaveButton;
