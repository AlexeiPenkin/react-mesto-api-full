import React, { useEffect } from 'react';

export default function PopupWithForm(props) {

  useEffect(() => {
    if (!props.isOpen) return;
    
    function handleEsc(e) {
      if (e.key === "Escape") {
        props.closeAllPopups();
      }
    }
  
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    }
    // eslint-disable-next-line
  }, [props.isOpen]);

  return (
    <div className={`popup ${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
      <button
        className="popup__close-button"
        type="button"
        title="Закрыть"
        onClick={props.onClose}>{props.buttonText}
      </button>
        <form className="form" name={props.name} onSubmit={props.onSubmit}>
          <h2 className="form__title">{props.title}</h2>
          <fieldset className="form__set">
            <label className="form__field form__field_type-name">
              {props.children}
              <span className="form__input-error"></span>
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
}