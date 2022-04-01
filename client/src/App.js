import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import { getCategoryData } from './redux/category/categorySlice';
import { getUserData } from './redux/user/userSlice';
import RoutesApp from './routes/RoutesApp.jsx'

import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserData())
    dispatch(getCategoryData())
  }, [])

  return (
    <div>
      <Header/>
      <RoutesApp />
    </div>
  )
}

export default App;
