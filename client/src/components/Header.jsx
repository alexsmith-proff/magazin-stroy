import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../redux/user/userSlice'
import { getCategoryData } from '../redux/category/categorySlice'
import Catalog from './Catalog'
import allEndPoints from '../services/api/api'
import { arrayToTree } from '../services/category/category.service'
import logo from '../assets/img/logo.png'
import find from '../assets/img/find.png'
import CartIcon from './CartIcon'

import st from './header.module.scss'

function Header() {

    const dispatch = useDispatch()
    const userdata = useSelector(state => state.user.user)

    const [categoryVisible, setCategoryVisible] = useState(false)
    const [categoryVisibleMobile, setCategoryVisibleMobile] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)
    const[categoryTree, setCategoryTree] = useState([])

    useEffect(async() => {
        const response = await allEndPoints.category.getCategory()
        setCategoryTree(arrayToTree(response.data.categories))
        dispatch(getCategoryData())
    }, [])
    
    function handlerLogoutClick() {
        localStorage.removeItem('accessToken');
        dispatch(setUserData({}))
    }

    function handleClickCatalog() {
        setCategoryVisible(!categoryVisible)
    }
    function handleClickCatalogMobile() {
        setMenuVisible(!menuVisible)
        setCategoryVisibleMobile(!categoryVisibleMobile)
    }

    function CloseCatalog(e) {
        setCategoryVisible(false)
    }
    function CloseCatalogMobile(e) {
        setCategoryVisibleMobile(false)
    }
    function handleClickMenu() {
        setMenuVisible(!menuVisible)
    }

    // console.log('Header cart', cartProducts);

  return (
    <div className={st.header}>
        <div className="container">
            <div className={st.mobileLogo}>
                <div className={st.burger} onClick={handleClickMenu}></div>
                <Link to="/" className={st.logo}>
                    <img src={logo} alt="logo" />
                        <div className={st.name}>СтройМагазин</div>
                </Link>
                <CartIcon /> 
            </div>
            <div className={st.headerWrap}>
                <div className={st.wrapL}>
                    <Link to="/" className={st.logo}>
                        <img src={logo} alt="logo" />
                        <div className={st.name}>СтройМагазин</div>
                    </Link>
                    <div className={st.catalogDesktop} onClick={handleClickCatalog}>КАТАЛОГ</div>
                    {
                    categoryVisible &&
                        <Catalog closeCat={CloseCatalog} arr={categoryTree}/>
                    }
                </div>
                <div className={st.finder}>
                    <input type="text" placeholder="ПОИСК" />
                    <div className={st.finderBtn}>
                        <img src={find} alt="find" />
                    </div>
                </div>
                <div className={st.wrapR}>
                    {
                        Object.keys(userdata).length ?
                            (
                                <>
                                <div className={st.username}>Привет, {userdata.surname} {userdata.name} </div>
                                <Link className={st.loginBtn} to="/" onClick={handlerLogoutClick}>Выйти</Link>
                                </>
                            )
                        :
                            (
                                <div className={st.auth}>
                                    <Link className={st.loginBtn} to="/login">Войти</Link>
                                    <Link className={st.registerBtn} to="/register">Регистрация</Link>
                                </div>
                            )
                    }
                    <CartIcon />                     
                </div>
            </div>
            {
                menuVisible && 
                    <div className={st.menu}>
                        <ul>
                            <li onClick={handleClickCatalogMobile}>
                                КАТАЛОГ
                            </li>
                            <li>
                                <Link to="/login" onClick={handleClickMenu}>ВОЙТИ</Link>
                            </li>
                            <li>
                                <Link to="/register" onClick={handleClickMenu}>РЕГИСТРАЦИЯ</Link>
                            </li>
                        </ul>
                    </div>
            }
            {
                categoryVisibleMobile &&
                <Catalog closeCat={CloseCatalogMobile} arr={categoryTree}/>
            }
            
            
        </div>        
    </div>
  )
}

export default Header