import React from 'react';
import Form from './components/Form';

const formProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: '',
  hasTrunfo: true,
  isSaveButtonDisabled: false,
  onInputChange: () => {},
  onSaveButtonClick: () => {},
};

class App extends React.Component {
  constructor() {
    super();
    this.state = { ...formProps };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
      </div>
    );
  }
}

export default App;
