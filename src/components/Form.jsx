import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Name from './form-components/Name';
import Description from './form-components/Description';
import Attr1 from './form-components/Attr1';
import Attr2 from './form-components/Attr2';
import Attr3 from './form-components/Attr3';
import Image from './form-components/Image';
import Rare from './form-components/Rare';
import Trunfo from './form-components/Trunfo';
import SaveButton from './form-components/SaveButton';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form action="">
        <Name
          cardName={ cardName }
          onInputChange={ onInputChange }
        />
        <Description
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Attr1
          cardAttr1={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <Attr2
          cardAttr2={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <Attr3
          cardAttr3={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <Image
          cardImage={ cardImage }
          onInputChange={ onInputChange }
        />
        <Rare
          cardRare={ cardRare }
          onInputChange={ onInputChange }
        />
        <Trunfo
          hasTrunfo={ hasTrunfo }
          onInputChange={ onInputChange }
          cardTrunfo={ cardTrunfo }
        />
        <SaveButton
          onSaveButtonClick={ onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
