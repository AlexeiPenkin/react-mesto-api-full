import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [ inputEmailErrorText, setInputEmailErrorText ] = useState('Вы пропустили это поле.');
  const [ inputPasswordErrorText, setInputPasswordErrorText ] = useState('Вы пропустили это поле.');
  const [ inputEmailValid, setInputEmailValid ] = useState(true);
  const [ inputPasswordValid, setInputPasswordValid ] = useState(true);
  const [ formValid, setFormValid ] = useState(false);

  const submitButtonClassName = `register__submit ${formValid ? '' : 'register__submit_disabled'}`;
  const inputEmailClassName = `register__input register__input_type_email ${inputEmailValid ? '' : 'register__input_type_error'}`;
  const inputEmailErrorClassName = `register__input-error ${inputEmailValid ? '' : 'register__input-error_visible'}`;
  const inputPasswordClassName = `register__input register__input_type_password ${inputPasswordValid ? '' : 'register__input_type_error'}`;
  const inputPasswordErrorClassName = `register__input-error ${inputPasswordValid ? '' : 'register__input-error_visible'}`;

  function handleEmailChange(e) {
    setEmail(e.target.value);
    
    setInputEmailValid(e.target.validity.valid);
    setInputEmailErrorText(e.target.validationMessage);
    
    if (e.target.validity.valid && inputPasswordValid && password !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    
    setInputPasswordValid(e.target.validity.valid);
    setInputPasswordErrorText(e.target.validationMessage);
    
    if (e.target.validity.valid && inputEmailValid && email !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }

  useEffect(() => {
    setFormValid(false);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({email, password});
    // if (props.regStatus) {
    //   setEmail('');
    //   setPassword('');
    // }
  }

  return (
    <div className="register">
      <div className="register__container">
        <form className="register__form" name="register__form" onSubmit={handleSubmit} noValidate>
          <h2 className="register__title">Регистрация</h2>
          <fieldset className="register__set">
            <label className='register__field register__field_type_email'>
              <input
                className={inputEmailClassName}
                type="email"
                name="email"
                placeholder="Email"
                required
                minLength="2"
                maxLength="40"
                value={props.email}
                onChange={handleEmailChange}
              />
              <span className={inputEmailErrorClassName}>
                {inputEmailErrorText}
              </span>
            </label>
            <label className='register__field register__field_type_password'>
              <input
                className={inputPasswordClassName}
                type="password"
                name="password"
                placeholder="Пароль"
                required
                minLength="2"
                maxLength="200"
                value={props.password}
                onChange={handlePasswordChange}
              />
              <span className={inputPasswordErrorClassName}>
                {inputPasswordErrorText}
              </span>
            </label>
            <button className={submitButtonClassName} type="submit" disabled={formValid ? false : true}>
              Зарегистрироваться
            </button>
            <div className="register__signin">
              <p className="register__signin_p">
                Уже зарегистрированы?
              </p>
              <Link to="signin" className="register__signin_link">
                Войти
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;