import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";

const page = document.querySelector(".page");
const editButton = page.querySelector(".profile__edit-button_action_edit");
const addButton = page.querySelector(".profile__add-button_action_add");
const profileName = page.querySelector(".profile__name");
const profileAbout = page.querySelector(".profile__about");
const nameInput = page.querySelector(".popup__input_type_name");
const aboutInput = page.querySelector(".popup__input_type_about");

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

const popupEditProfile = new PopupWithForm(".popup_type_edit", (formValues) => {
  profileName.textContent = formValues.name;
  profileAbout.textContent = formValues.about;
});
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm(".popup_type_add", (formValues) => {
  const card = new Card(formValues, ".template-card", () => {
    popupImage.open(formValues.name, formValues.link);
  });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
});
popupAddCard.setEventListeners();

editButton.addEventListener("click", () => {
  popupEditProfile.open();
});

addButton.addEventListener("click", () => {
  popupAddCard.open();
});

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
