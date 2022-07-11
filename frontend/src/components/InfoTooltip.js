import React from 'react'; 
import SuccessIcon from '../image/SuccessIcon.svg';
import ErrorIcon from '../image/ErrorIcon.svg';

function InfoTooltip({ title, icon, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_info-tooltip ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          title="Закрыть"
          onClick={onClose}>
        </button>
        {icon
          ?
          (<img className="popup__success-icon" src={SuccessIcon} alt="Успешно"/>)
          :
          (<img className="popup__error-icon" src={ErrorIcon} alt="Ошибка"/>)
        }
        <h2 className="popup__title popup__title_type_info-tooltip">{`${title}`}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;