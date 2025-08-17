export const initialCards = [
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

export const settings = {
  formSelector: "form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};

export const page = document.querySelector(".page");
export const editButton = page.querySelector(
  ".profile__edit-button_action_edit"
);
export const addButton = page.querySelector(".profile__add-button_action_add");
export const profileNameSelector = ".profile__name";
export const profileAboutSelector = ".profile__about";
export const nameInput = page.querySelector(".popup__input_type_name");
export const aboutInput = page.querySelector(".popup__input_type_about");
