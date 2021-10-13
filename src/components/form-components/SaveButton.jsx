import React, { Component } from 'react';

class SaveButton extends Component {
  render() {
    return (
      <div>
        <button type="submit" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default SaveButton;
