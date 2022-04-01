import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux'
import validator from 'validator';
import allEndpoints from '../services/api/api.js';

import st from './loginpage.module.scss';
import { getUserData } from '../redux/user/userSlice.js';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailAlert, setIsEmailAlert] = useState(false);
  const [isPasswordAlert, setIsPasswordAlert] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChangeEmail = (e) => {
      setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
      setPassword(e.target.value);
  }
  const handleLoginClick = async() => {
      setIsEmailAlert(false)
      setIsPasswordAlert(false)
      if(!validator.isEmail(email)){
          setIsEmailAlert(true)
      }else if(password.length < 5){
          setIsPasswordAlert(true)
      }else{
        try {
          const response = await allEndpoints.auth.login({
            "email": email,
            "password": password                              
          })
          localStorage.setItem('accessToken', response.data.accessToken)
          dispatch(getUserData())
          navigate('/')          
        } catch (e) {
          if(e.response.status === 422){
            console.log('status 422')
          }
          setIsMessage(true)
        }
      }
  }

return (
  <div className={st.freespace}>
    <div className={st.form}>
    <div className={st.titlewrap}>
        <div className={st.title}>Вход</div>
        <button
          className={st.loginbtn}
          onClick={() => navigate('/register')}
          >
          Регистрация
        </button>
    </div>
    <input className={st.input} type="text" value={email} onChange={handleChangeEmail} placeholder='E-mail' />
    <input className={st.input} type="password" value={password} onChange={handleChangePassword} placeholder='Пароль' />
    <button className={st.logbtn} onClick={handleLoginClick}>Вход</button>
    {isMessage && <div className={st.message}>Логин или пароль неверные</div>}
    {isEmailAlert && <div className={st.alert + ' ' + st.mailalert}>Вы ввели некорректный email</div>}
    {isPasswordAlert && <div className={st.alert + ' ' + st.passwordalert}>Пароль должен содержать более 5 символов </div>}
    </div>
  </div>
)
}

export default LoginPage