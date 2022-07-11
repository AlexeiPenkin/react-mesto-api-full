import React, { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <main className='content'>
      <section className="profile">
        <picture 
          className="profile__avatar-update"
          title="Обновить аватар" 
          onClick={props.onEditAvatar}>
          <img 
            className="profile__avatar"
            src={`${currentUser.avatar}`} 
            alt="Аватар пользователя"/>
        </picture>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button 
            className="profile__edit-button" 
            type="button" 
            title="Редактировать профиль"
            onClick={props.onEditProfile}>
          </button>
          <h2 className="profile__job">{currentUser.about}</h2>
        </div>

        <button 
          className="profile__add-button" 
          type="button"
          title="Добавить новую карточку"
          onClick={props.onAddPlace}>
        </button>
      </section>

      <div className="card-list">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </div>
    </main>
  )
}