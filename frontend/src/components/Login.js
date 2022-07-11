import React, { useState, useEffect } from 'react';


function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [ inputEmailErrorText, setInputEmailErrorText ] = useState('Вы пропустили это поле.');
  const [ inputPasswordErrorText, setInputPasswordErrorText ] = useState('Вы пропустили это поле.');
  const [ inputEmailValid, setInputEmailValid ] = useState(true);
  const [ inputPasswordValid, setInputPasswordValid ] = useState(true);
  const [ formValid, setFormValid ] = useState(false);

  const submitButtonClassName = `login__submit ${formValid ? '' : 'login__submit_disabled'}`;
  const inputEmailClassName = `login__input login__input_type_email ${inputEmailValid ? '' : 'login__input_type_error'}`;
  const inputEmailErrorClassName = `login__input-error ${inputEmailValid ? '' : 'login__input-error_visible'}`;
  const inputPasswordClassName = `login__input login__input_type_password ${inputPasswordValid ? '' : 'login__input_type_error'}`;
  const inputPasswordErrorClassName = `login__input-error ${inputPasswordValid ? '' : 'login__input-error_visible'}`;

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
    props.onLogin({email, password});
  }

  return(
    <div className="login">
      <div className="login__container">
        <form className="login__form" name="login__form" onSubmit={handleSubmit} noValidate>
          <h2 className="login__title">Вход</h2>
          <fieldset className="login__set">
            <label className='login__field login__field_type_email'>
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
            <label className='login__field login__field_type_password'>
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
              Войти
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Login;