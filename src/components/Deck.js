import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { deck } = this.props;
    return (
      <div>
        <h2 className="header" id="all-cards-title">Todas as cartas</h2>
        <div className="all-cards">
          { deck.map((card) => (
            <Card
              key={ card.cardName }
              { ...card }
            />
          ))}
        </div>
      </div>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
};

export default Deck;
