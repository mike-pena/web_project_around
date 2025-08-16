import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import {
  openPopup,
  closePopup,
  setPopupMousedownEventListener,
  openImagePopup,
} from "./utils.js";

const page = document.querySelector(".page");
const editButton = page.querySelector(".profile__edit-button_action_edit");
const addButton = page.querySelector(".profile__add-button_action_add");
const closeButtons = page.querySelectorAll(".popup__close_action_close");
const profileName = page.querySelector(".profile__name");
const profileAbout = page.querySelector(".profile__about");
const nameInput = page.querySelector(".popup__input_type_name");
const aboutInput = page.querySelector(".popup__input_type_about");
const editProfileForm = page.querySelector(".edit-profile-form");
const addCardForm = page.querySelector(".add-card-form");
const photoGrid = document.querySelector(".photo-grid");

const initialCards = [
  {
    name: "Red Rocks",
    link: "./images/red-rocks.jpg",
  },
  {
    name: "Monument Valley",
    link: "./images/monument-valley.jpg",
  },
  {
    name: "Acadia National Park",
    link: "./images/acadia-national-park.jpg",
  },
  {
    name: "Grand Canyon",
    link: "./images/grand-canyon.jpg",
  },
  {
    name: "Mount Rainier",
    link: "./images/mount -rainier.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "./images/yosemite-valley.jpg",
  },
];

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".template-card", () => {
        popupImage.open(card._name, card._imageLink);
      });
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".photo-grid"
);

const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  const popup = page.querySelector(".popup_type_edit");
  closePopup(popup);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const cardTitleInput = page.querySelector(
    ".popup__input_type_place-name"
  ).value;
  const cardImageLinkInput = page.querySelector(
    ".popup__input_type_image-link"
  ).value;

  const card = new Card(
    { name: cardTitleInput, link: cardImageLinkInput },
    ".template-card",
    openImagePopup
  );

  const cardElement = card.generateCard();
  photoGrid.append(cardElement);

  const popup = page.querySelector(".popup_type_add");
  closePopup(popup);
}

editButton.addEventListener("click", () => {
  openPopup("edit");
});

addButton.addEventListener("click", () => {
  openPopup("add");
});
/*
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});
*/
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

addCardForm.addEventListener("submit", handleAddCardFormSubmit);

const settings = {
  formSelector: "form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};

page.querySelectorAll(settings.formSelector).forEach((form) => {
  const formValidator = new FormValidator(settings, form);
  formValidator.enableValidation();
});

nameInput.value = profileName.textContent;
aboutInput.value = profileAbout.textContent;

cardList.renderItems();

//setPopupMousedownEventListener();
