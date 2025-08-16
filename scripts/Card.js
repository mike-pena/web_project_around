export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._imageLink = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".photo-grid__card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLike();
    });

    this._image.addEventListener("click", () => {
      this._handleCardClick(this._name, this._imageLink);
    });

    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
    });
  }

  _handleLike() {
    this._likeButton.classList.toggle("photo-grid__like-button_act");
  }

  _deleteCard() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".photo-grid__like-button");
    this._deleteButton = this._element.querySelector(
      ".photo-grid__delete-button"
    );
    this._image = this._element.querySelector(".photo-grid__image");
    this._title = this._element.querySelector(".photo-grid__title");

    this._title.textContent = this._name;
    this._image.src = this._imageLink;
    this._image.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}
