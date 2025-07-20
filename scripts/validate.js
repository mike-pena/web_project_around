const settings = {
  formSelector: "form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach(function (formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    );
    setEventListeners(formElement, inputList);
  });
}

function setEventListeners(formElement, inputList) {
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );
  validateButton(buttonElement, inputList);

  formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

  inputList.forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      checkInputValidity(inputElement);
      validateButton(buttonElement, inputList);
    });
  });
}

function checkInputValidity(inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(inputElement);
  } else {
    hideInputError(inputElement);
  }
}

function validateButton(buttonElement, inputList) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}

function showInputError(inputElement) {
  const spanElement = document.querySelector(`.${inputElement.id}-error`);
  spanElement.textContent = inputElement.validationMessage;
  spanElement.classList.add(settings.errorClass);
  inputElement.classList.add(settings.inputErrorClass);
}

function hideInputError(inputElement) {
  const spanElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  spanElement.classList.remove(settings.errorClass);
  spanElement.textContent = "";
}

enableValidation();
