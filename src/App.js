import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Deck from './components/Deck';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  newCard = (card) => {
    this.setState((prevState) => ({
      deck: [...prevState.deck, card],
    }));
  }

  onInputChange = ({ target: { name, value, type, checked } }) => {
    value = type === 'checkbox'
      ? checked
      : value;
    this.setState(({ [name]: value }), () => {
      const objValues = Object.values(this.state);
      const magicNumber = 90;
      const magicNumber2 = 210;
      const {
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;
      const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      if (objValues.some((data) => data === ''
        || data > magicNumber
        || data < 0)) {
        this.setState({ isSaveButtonDisabled: true });
      } else if (sum > magicNumber2) {
        this.setState({ isSaveButtonDisabled: true });
      } else {
        this.setState({ isSaveButtonDisabled: false });
      }
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      deck,
    } = this.state;

    if (deck.every((card) => (card.hasTrunfo))) {
      this.setState({ hasTrunfo: true });
    }

    this.newCard({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
  }

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
      deck,
    } = this.state;

    return (
      <div>
        <h1 className="header"> Tryunfo! </h1>
        <main>
          <section className="create-card">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <section className="preview">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
        </main>
        <div className="deck">
          <Deck
            deck={ deck }
          />
        </div>
      </div>
    );
  }
}

export default App;
