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
const editProfileSubmitBtn = page.querySelector(".popup__button_type_edit");
const templateCard = document.querySelector(".template-card").content;

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

function createCard(name, link) {
  const clonedCard = templateCard
    .querySelector(".photo-grid__card")
    .cloneNode(true);

  clonedCard.querySelector(".photo-grid__title").textContent = name;
  clonedCard.querySelector(".photo-grid__image").src = link;
  clonedCard.querySelector(".photo-grid__image").alt = name;

  const likeButton = clonedCard.querySelector(".photo-grid__like-button");
  const deleteButton = clonedCard.querySelector(".photo-grid__delete-button");
  const cardImage = clonedCard.querySelector(".photo-grid__image");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("photo-grid__like-button_act");
  });

  deleteButton.addEventListener("click", function () {
    clonedCard.remove();
  });

  cardImage.addEventListener("click", function () {
    openImagePopup(name, link);
  });

  const photoGrid = page.querySelector(".photo-grid");
  photoGrid.append(clonedCard);
}

function openImagePopup(title, imageUrl) {
  const imagePopup = page.querySelector(".popup_type_image");
  const popupImage = imagePopup.querySelector(".popup__image");
  const popupTitle = imagePopup.querySelector(".popup__image-title");

  popupImage.src = imageUrl;
  popupImage.alt = title;
  popupTitle.textContent = title;

  openPopup("image");
}

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

  createCard(cardTitleInput, cardImageLinkInput);

  const popup = page.querySelector(".popup_type_add");
  closePopup(popup);
}

let currentPopup = null;

function openPopup(popupType) {
  const popup = page.querySelector(`.popup_type_${popupType}`);

  closeCurrentPopup();

  popup.classList.add("popup_opened");
  currentPopup = popup;
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");

  if (popup === currentPopup) {
    currentPopup = null;
    document.removeEventListener("keydown", handleEscClose);
  }
}

function closeCurrentPopup() {
  if (currentPopup) {
    closePopup(currentPopup);
  }
}

function handleEscClose(e) {
  if (e.key === "Escape") {
    closeCurrentPopup();
  }
}

page.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("mousedown", (e) => {
    if (e.target === popup) {
      closePopup(popup);
    }
  });
});

initialCards.forEach(function (item) {
  createCard(item.name, item.link);
});

editButton.addEventListener("click", () => {
  openPopup("edit");
});

addButton.addEventListener("click", () => {
  openPopup("add");
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

addCardForm.addEventListener("submit", handleAddCardFormSubmit);

nameInput.value = profileName.textContent;

aboutInput.value = profileAbout.textContent;
