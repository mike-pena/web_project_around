import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popupElement.querySelector(".popup__image");
    this._titleElement = this._popupElement.querySelector(
      ".popup__image-title"
    );
  }

  open(title, imageURL) {
    super.open();
    this._imageElement.src = imageURL;
    this._imageElement.alt = title;
    this._titleElement.textContent = title;
  }
}
