import React, { useEffect } from 'react';

export default function ImagePopup(props) {

  useEffect(() => {
    if (!props.isOpen) return;
    
    function handleEsc(e) {
      if (e.key === "Escape") {
        props.onClose()
      }
    }
  
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    }
    // eslint-disable-next-line
  }, [props.isOpen]);

  return (
      <div className={`popup ${props.name} ${props.card ? 'popup_opened' : ''}`}>
        <div className="popup-image__container">
          <div className="popup-image__content">
            <button 
              className="popup__close-button"
              type="button"
              title="Закрыть"
              onClick={props.onClose}>{props.buttonText}
            </button>
            <figure className="popup-image__figure">
              <img 
                className="popup-image__image"
                src={props.card ? props.card.link : ''}
                alt={props.card ? props.card.name : ''}
              />
              <p className="popup-image__title">{props.card ? props.card.name : ''}</p>
            </figure>
          </div>
        </div>
      </div>
  )
}