export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._currentPopup = null;
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _handleClickOutside(evt) {
    if (evt.target === this._backdrop) {
      this.close();
    }
  }

  open() {
    this._closeCurrentPopup();

    this._popupElement.classList.add("popup_opened");
    this._currentPopup = this._popupElement;
    document.addEventListener("keydown", this._handleEscClose);
  }

  _closeCurrentPopup() {
    if (this._currentPopup) {
      this.close();
    }
  }

  close() {
    this._popupElement.classList.remove("popup_opened");

    if (this._popupElement === this._currentPopup) {
      this._currentPopup = null;
      document.removeEventListener("keydown", this._handleEscClose);
    }
  }

  setEventListeners() {
    this._closeButton = this._popupElement.querySelector(".popup__close");
    this._backdrop = this._popupElement.querySelector(".popup__backdrop");

    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    this._backdrop.addEventListener("click", (evt) => {
      this._handleClickOutside(evt);
    });
  }
}
