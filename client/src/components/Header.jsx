import React from 'react'
import { Link } from 'react-router-dom';
import st from './header.module.scss'
import logo from '../assets/img/logo.png'
import find from '../assets/img/find.png'
import cart from '../assets/img/cart.png'
import { useSelector } from 'react-redux';

import allEndpoints from '../services/api/api.js';

function Header() {
    // const userdata = useSelector(state => state.user.user)
    // console.log(userdata)

    const handlerMeClick = async() => {
        const response = await allEndpoints.auth.getProfile()
        //   console.log(response)
    }

  return (
    <div className={st.header}>
        <div className="container">
            <div className={st.headerWrap}>
                <div className={st.wrapL}>
                    <Link to="/" className={st.logo}>
                        <img src={logo} alt="logo" />
                        <div className={st.name}>СтройМагазин</div>
                    </Link>
                    <div className={st.catalog}>КАТАЛОГ</div>
                    
                </div>
                <div className={st.finder}>
                    <input type="text" placeholder="ПОИСК" />
                        <div className={st.finderBtn}>
                            <img src={find} alt="find" />
                        </div>
                </div>
                <div className={st.wrapR}>
                    <div className={st.auth}>
                        <div className={st.loginBtn} onClick={handlerMeClick}>Me</div>
                        <Link className={st.loginBtn} to="/login">Войти</Link>
                        <Link className={st.registerBtn} to="/register">Регистрация</Link>
                    </div>
                    <Link to="/cart" className={st.cart}>
                        <img src={cart} alt="cart" />
                    </Link>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Header