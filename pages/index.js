import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  page,
  editButton,
  addButton,
  profileNameSelector,
  profileAboutSelector,
  nameInput,
  aboutInput,
  settings,
} from "../utils/constants.js";

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

const userInfo = new UserInfo(profileNameSelector, profileAboutSelector);

const popupEditProfile = new PopupWithForm(".popup_type_edit", (formValues) => {
  userInfo.setUserInfo(formValues.name, formValues.about);
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

page.querySelectorAll(settings.formSelector).forEach((form) => {
  const formValidator = new FormValidator(settings, form);
  formValidator.enableValidation();
});

editButton.addEventListener("click", () => {
  popupEditProfile.open();
  nameInput.value = userInfo.getUserInfo()["name"];
  aboutInput.value = userInfo.getUserInfo()["about"];
});

addButton.addEventListener("click", () => {
  popupAddCard.open();
});

cardList.renderItems();
