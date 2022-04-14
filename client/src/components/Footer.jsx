import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import cards from '../assets/img/cards.png'
import insta from '../assets/img/insta.svg'
import facebook from '../assets/img/facebook.svg'
import apple from '../assets/img/apple.svg'
import googleplay from '../assets/img/googleplay.svg'

import st from './footer.module.scss'

function Footer() {
  return (
    <>
        <div className={st.footer}>
            <div className="container">
                <ul className={st.footer__list}>
                    <li className={st.footer__item}>
                        <Link to="/" className={st.footer__logo}>
                            <img className={st.footer__logoimg} src={logo} />
                            <span className={st.footer__logoname}>СтройМагазин</span>
                        </Link>
                    </li>
                    <li className={st.footer__item}>
                        <div className={st.footer__itemname}>Строй магазин</div>
                        <ul>
                            <li>
                                <a href="#">Каталог</a>
                            </li>
                            <li>
                                <a href="#">О компании</a>
                            </li>
                            <li>
                                <a href="#">Акции</a>
                            </li>
                            <li>
                                <a href="#">Вакансии</a>
                            </li>
                        </ul>
                    </li>
                    <li className={st.footer__item}>
                        <div className={st.footer__itemname}>Услуги</div>
                        <ul>
                            <li>
                                <a href="#">Доставка</a>
                            </li>
                            <li>
                                <a href="#">Самовывоз</a>
                            </li>
                            <li>
                                <a href="#">Сервис-центр</a>
                            </li>
                        </ul>
                    </li>
                    <li className={st.footer__item}>
                        <div className={st.footer__itemname}>Помощь и поддержка</div>
                        <ul>
                            <li>
                                <a href="#">Оплата</a>
                            </li>
                            <li>
                                <a href="#">Пункты выдачи</a>
                            </li>
                            <li>
                                <a href="#">Политика конфиденциальности</a>
                            </li>
                        </ul>
                    </li>
                    <li className={st.footer__item + ' ' + st.footer__social}>
                        <a href="#">
                            <img className={st.footer__ico} src={insta} alt="insta" />
                        </a>
                        <a href="#">
                            <img className={st.footer__ico} src={facebook} alt="facebook" />
                        </a>
                        <a href="#">
                            <img className={st.footer__ico} src={apple} alt="inapplesta" />
                        </a>    
                        <a href="#">
                            <img className={st.footer__ico} src={googleplay} alt="googleplay" />
                        </a>    
                    </li>
                </ul> 
                <li className={st.footer__item + ' ' + st.footer__social + ' ' + st.footer__mobileSocial}>
                    <a href="#">
                        <img className={st.footer__ico} src={insta} alt="insta" />
                    </a>
                    <a href="#">
                        <img className={st.footer__ico} src={facebook} alt="facebook" />
                    </a>
                    <a href="#">
                        <img className={st.footer__ico} src={apple} alt="inapplesta" />
                    </a>    
                    <a href="#">
                        <img className={st.footer__ico} src={googleplay} alt="googleplay" />
                    </a>    
                </li>
            </div>
        </div>
        <div className={st.underfooter}>
            <div className={st.underfooter__wrap}>
                <div className={st.underfooter__years}>Строй магазин 2005-2022</div>
                <div className={st.underfooter__cards}><img src={cards} alt="cards" /></div>
            </div>
        </div>
    </>
  )
}

export default Footer