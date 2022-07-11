import React from 'react';
import PopupWithForm from './PopupWithForm';


export default function DeleteConfirmPopup(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onDeleteConfirm(props.card)
  }

  return (
    <PopupWithForm
      name='popup_delete-confirm'
      title='Вы уверены?'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      closeAllPopups={props.onClose}
    >
      <button
        type="submit"
        className="form__submit-button form__submit-button_type_delete-confirm">{props.onLoading ? "Удаление..." : "Да"}
      </button>
    </PopupWithForm>
  )
}