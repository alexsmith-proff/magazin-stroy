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

import st from './header.module.scss'
import CartIcon from './CartIcon'

function Header() {

    const dispatch = useDispatch()
    const userdata = useSelector(state => state.user.user)
    const cartProducts = useSelector(state => state.cart.itemsInCart) 

    const [categoryVisible, setCategoryVisible] = useState(false)
    const[categoryTree, setCategoryTree] = useState([])

    useEffect(async() => {
        const response = await allEndPoints.category.getCategory()
        setCategoryTree(arrayToTree(response.data.categories))
        dispatch(getCategoryData())
    }, [])
    
    const handlerLogoutClick = () => {
        localStorage.removeItem('accessToken');
        dispatch(setUserData({}))
    }

    async function handleClickCatalog() {
        setCategoryVisible(!categoryVisible)
    }

    function CloseCatalog(e) {
        setCategoryVisible(false)
    }

    // console.log('Header cart', cartProducts);

  return (
    <div className={st.header}>
        <div className="container">
            <div className={st.headerWrap}>
                <div className={st.wrapL}>
                    <Link to="/" className={st.logo}>
                        <img src={logo} alt="logo" />
                        <div className={st.name}>СтройМагазин</div>
                    </Link>
                    <div className={st.catalog} onClick={handleClickCatalog}>КАТАЛОГ</div>
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
                                <div className={st.name}>Привет, {userdata.surname} {userdata.name} </div>
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
        </div>        
    </div>
  )
}

export default Header