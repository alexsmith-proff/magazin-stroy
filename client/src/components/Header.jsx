import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import st from './header.module.scss'
import logo from '../assets/img/logo.png'
import find from '../assets/img/find.png'
import cart from '../assets/img/cart.png'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../redux/user/userSlice'
import { getCategoryData, setCategoryData } from '../redux/category/categorySlice'
import Catalog from './Catalog'
import allEndPoints from '../services/api/api'
import arrayToTree from '../services/category/category.service'

// import allEndpoints from '../services/api/api.js'
// import { set } from 'immer/dist/internal';

function Header() {

    const dispatch = useDispatch()
    const userdata = useSelector(state => state.user.user) 

    const [categoryVisible, setCategoryVisible] = useState(false)
    const[categoryTree, setCategoryTree] = useState([])


    useEffect(async() => {

        const response = await allEndPoints.category.getCategory()
        setCategoryTree(arrayToTree(response.data.categories))

        // console.log(categoryTree);

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
                                    {/* <div className={st.loginBtn} onClick={handlerMeClick}>Me</div> */}
                                    <Link className={st.loginBtn} to="/login">Войти</Link>
                                    <Link className={st.registerBtn} to="/register">Регистрация</Link>
                                </div>
                            )
                    }

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