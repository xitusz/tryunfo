import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <div className="card-container">
        <div className="card">
          <h2
            className="name-card"
            data-testid="name-card"
          >
            { cardName }
          </h2>
          { cardTrunfo
            ? <p className="trunfo-card" data-testid="trunfo-card">Super Trunfo</p>
            : null }
          <img
            className="image-card"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <div
            className="description-card"
            data-testid="description-card"
          >
            { cardDescription }
          </div>
          <div className="attributes-card">
            <span
              data-testid="attr1-card"
            >
              { cardAttr1 }
            </span>
            <span
              data-testid="attr2-card"
            >
              { cardAttr2 }
            </span>
            <span
              data-testid="attr3-card"
            >
              { cardAttr3 }
            </span>
          </div>
          <div
            className="rare-card"
            data-testid="rare-card"
          >
            { cardRare }
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
