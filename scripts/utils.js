let currentPopup = null;

export function openPopup(popupType) {
  const popup = document.querySelector(`.popup_type_${popupType}`);

  closeCurrentPopup();

  popup.classList.add("popup_opened");
  currentPopup = popup;
  document.addEventListener("keydown", handleEscClose);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");

  if (popup === currentPopup) {
    currentPopup = null;
    document.removeEventListener("keydown", handleEscClose);
  }
}

export function setPopupMousedownEventListener() {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.addEventListener("mousedown", (e) => {
      if (e.target === popup) {
        closePopup(popup);
      }
    });
  });
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
