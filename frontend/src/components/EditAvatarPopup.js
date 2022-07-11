import React, { useContext, useEffect, useRef } from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditAvatarPopup(props) {

  const currentUser = useContext(CurrentUserContext);

  const avatarRef = useRef('');

  useEffect(() => {
    avatarRef.current.value = currentUser.avatar;
  }, [currentUser.avatar])

  useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="popup_update-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      closeAllPopups={props.onClose}
    >
      <input 
        className="form__input" 
        id="avatar-link" 
        name="avatar-link" 
        type="url" 
        placeholder="Ваш аватар" 
        required
        ref={avatarRef}
      />
      <p className='form__input-error' id='avatar_link-error'/>
      <button
        type="submit"
        className="form__submit-button form__submit-button_type_update-avatar">{props.onLoading ? "Сохранение..." : "Сохранить"}
      </button>
    </PopupWithForm>
  )
}