import React, { useEffect, useState, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen])

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  }

  //Функция для изменения описания профиля через поле ввода
  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  }

  //Обработчик сабмита формы
  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
        name: name,
        about: description,
    });
  }

  return (
      <PopupWithForm
          name='edit-profile'
          title='Редактировать профиль'
          isOpen={props.isOpen}
          onSubmit={handleSubmit}
          onClose={props.onClose}
          closeAllPopups={props.onClose}
      >
      <input 
          className="form__input" 
          id='name' 
          name="name" 
          type="text" 
          placeholder='Введите имя' 
          maxLength="40" 
          minLength="2" 
          onChange={handleNameChange}
          value={name || ""}
          required
      />
      <p className="form__input-error" id="text_name-error"/>
      <input 
          className="form__input" 
          id='job' 
          name="about" 
          type="text" 
          placeholder='Введите информацию о себе' 
          maxLength="200" 
          minLength="2" 
          onChange={handleDescriptionChange}
          value={description || ""}
          required
      />
      <p className="form__input-error" id="text_job-error"/>
      <button
          type="submit"
          className="form__submit-button">
          {props.onLoading ? "Сохранение..." : "Сохранить"}
      </button>
      </PopupWithForm>
  )
}