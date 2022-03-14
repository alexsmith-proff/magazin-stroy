import React from 'react'
import { Link } from 'react-router-dom';
import st from './header.module.scss'

function Header() {
  return (
    <div className={st.header}>
        <div className="container">
            <div className={st.headerWrap}>
                <div className={st.wrapL}>
                    <Link to="/" className={st.logo}>
                        <img src="img/logo.png" alt="logo" />
                        <div className={st.name}>СтройМагазин</div>
                    </Link>
                    <div className={st.catalog}>КАТАЛОГ</div>
                    
                </div>
                <div className={st.finder}>
                    <input type="text" placeholder="ПОИСК" />
                        <div className={st.finderBtn}>
                            <img src="img/find.png" alt="find" />
                        </div>
                </div>
                <div className={st.wrapR}>
                    <div className={st.auth}>
                        <div className={st.loginBtn}>Войти</div>
                        <div className={st.registerBtn}>Регистрация</div>
                    </div>
                    <Link to="/cart" className={st.cart}>
                        <img src="img/cart.png" alt="cart" />
                    </Link>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Header