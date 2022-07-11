import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ card, ...props }) {

  // Подписываем на контескт
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую передаем в `className` кнопки удаления
  const cardDeleteButtonClassName = (
  `card__delete-button ${isOwn ? '' : 'card__delete-button_hidden'}`
  ); 

  // Создаём переменную, которую передаем в `className` кнопки лайка
  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(card);
  }

  function handleLikeClick() {
    props.onCardLike(card);
  }

  function handleDeleteClick() {
    props.onCardDelete(card);
  }

  return (
      <div className="card">
        <img
          className="card__image"
          src={card.link}
          name={card.name}
          alt={`Фотография: ${card.name}`}
          onClick={handleClick}/>
        <button
          className={cardDeleteButtonClassName}
          type="button"
          title="Удалить"
          onClick={handleDeleteClick}>
        </button>
        <div className="card__group">
          <h2 className="card__name">{card.name}</h2>
          <div className="card__group-like">
            <button 
              className={cardLikeButtonClassName}
              type="button"
              title="Нравится"
              onClick={handleLikeClick}>
            </button>
            <p className="card__like-count">{card.likes.length}</p>
          </div>
        </div>
      </div>
  )
}