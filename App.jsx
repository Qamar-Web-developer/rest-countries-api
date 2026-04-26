
// import Country from './Country.css'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import MyContext from "./context/api"
import { useState } from 'react'
import Footer from './component/footer'
export default function App() {
 const [isDark, setThem] = useState(JSON.parse(localStorage.getItem('them')))

  return (
    <MyContext.Provider value={[isDark,setThem]}>
      <Header/>
      <Outlet/>
      <Footer/>
    </MyContext.Provider>
  )
}
