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
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form action="">
        <Name cardName={ cardName } onInputChange={ onInputChange } />
        <Description />
        <Attr1 />
        <Attr2 />
        <Attr3 />
        <Image />
        <Rare />
        <Trunfo />
        <SaveButton />
      </form>
    );
  }
}
export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
