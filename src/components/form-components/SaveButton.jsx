import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SaveButton extends Component {
  render() {
    const {
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="inputs" id="save-button">
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          required
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default SaveButton;

SaveButton.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
