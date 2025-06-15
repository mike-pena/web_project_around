let page = document.querySelector(".page");

let editButton = page.querySelector(".profile__edit-button_action_edit");

let closeButton = page.querySelector(".popup__close_action_close");

let profileName = page.querySelector(".profile__name");

let profileAbout = page.querySelector(".profile__about");

let nameInput = page.querySelector(".popup__input_type_name");

let aboutInput = page.querySelector(".popup__input_type_about");

let formElement = page.querySelector(".popup__container");

let popupButton = page.querySelector(".popup__button");

function handleEditProfilePopup() {
  let popup = page.querySelector(".popup");

  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;

  popup.classList.toggle("popup_opened");

  popupButton.disabled = true;
  popupButton.classList.add("popup__button_inactive");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  handleEditProfilePopup();
}

function checkForChanges() {
  nameChanged = nameInput.value !== profileName.textContent;
  aboutChanged = aboutInput.value !== profileAbout.textContent;

  popupButton.disabled = !(nameChanged || aboutChanged);

  if (popupButton.disabled == false) {
    popupButton.classList.remove("popup__button_inactive");
  } else {
    popupButton.classList.add("popup__button_inactive");
  }
}

editButton.addEventListener("click", handleEditProfilePopup);

closeButton.addEventListener("click", handleEditProfilePopup);

formElement.addEventListener("submit", handleProfileFormSubmit);

nameInput.addEventListener("input", checkForChanges);

aboutInput.addEventListener("input", checkForChanges);
