export const formValidation = ({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: ".form__submit-button_disabled",
  inputErrorClass: ".form__input_type_error",
  errorClass: ".form__input-error_active",
});

export const cardSelector = '#card-template';
export const cardList = document.querySelector('.card-list');
export const addCardButton = document.querySelector('.profile__add-button');
export const inputCardName = document.querySelector("[name='title']");
export const inputCardLink = document.querySelector("[name='link']");
export const profileEditButton = document.querySelector(".profile__edit-button");
export const popupImageOpen = document.querySelector(".popup.popup-image");
export const popupImage = document.querySelector(".popup-image__image");
export const popupImageTitle = document.querySelector(".popup-image__title");
export const titleInputValue = document.querySelector('.form__input-name');
export const descriptionInputValue = document.querySelector('.form__input-job');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const avatarImage = document.querySelector('.profile__avatar');
export const avatarPopupButton = document.querySelector('.profile__avatar-update');
export const avatarInputValue = document.querySelector('.form__input-avatar');

export const initialCards = [
  {
    name: "Сочи",
    link: "https://images.unsplash.com/photo-1576096945991-8f93bc88e924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80",
  },
  {
    name: "Санкт-Петербург",
    link: "https://images.unsplash.com/photo-1603955129944-7f2dbff89b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Казань",
    link: "https://images.unsplash.com/photo-1628066068625-015ea7bcc21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVzc2lhJTIwc2lnaHRzZWVpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Красноярский край",
    link: "https://www.avtodispetcher.ru/wp-content/gallery/krasnoyarsky-krai/2.jpg",
  },
  {
    name: "Владивосток",
    link: "https://content.r9cdn.net/rimg/dimg/5a/24/84a52653-city-17546-173323f0b02.jpg?width=1200&height=630&crop=true",
  },
  {
    name: "Архангельская область",
    link: "https://sun9-12.userapi.com/impf/c851220/v851220531/104efb/ScYk7ynMvXU.jpg?size=1280x874&quality=96&sign=bab021682a9afacd0853d86a143a39ef&type=album",
  },
];