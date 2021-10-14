import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
      <div className="main-div">
        <section className="section-board">
          <h1>Tryunfo</h1>
          <Form { ...this.state } onInputChange={ this.onInputChange } />
        </section>
      </div>
    );
  }
}

export default App;
