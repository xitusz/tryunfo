import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      <div>
        <form className="form">
          <h1 className="header">Adicionar nova carta</h1>
          <label className="form-label" htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="cardName"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label className="form-label" htmlFor="cardDescription">
            Descrição
            <textarea
              data-testid="description-input"
              id="cardDescription"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label className="form-label-inline" htmlFor="cardAttr1">
            Attr1:
            <input
              type="number"
              data-testid="attr1-input"
              id="cardAttr1"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label className="form-label-inline" htmlFor="cardAttr2">
            Attr2:
            <input
              type="number"
              data-testid="attr2-input"
              id="cardAttr2"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label className="form-label-inline" htmlFor="cardAttr3">
            Attr3:
            <input
              type="number"
              data-testid="attr3-input"
              id="cardAttr3"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label className="form-label" htmlFor="cardImage">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="cardImage"
              name="cardImage"
              placeholder="link da imagem"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label className="form-label-inline" htmlFor="cardRare">
            Raridade:
            <select
              data-testid="rare-input"
              id="cardRare"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal"> normal </option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro </option>
            </select>
          </label>
          <label className="cardTrunfo-label" htmlFor="cardTrunfo">
            { hasTrunfo
              ? (
                <p
                  className="trunfo-validated"
                >
                  Você já tem um Super Trunfo em seu baralho
                </p>
              ) : (
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  id="cardTrunfo"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              )}
            Super Trunfo
          </label>
          <button
            type="submit"
            data-testid="save-button"
            className="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

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

export default Form;
