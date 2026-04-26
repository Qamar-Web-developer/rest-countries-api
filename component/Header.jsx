import { useState } from 'react'
import useThem from '../hooks/useThem'

export default function Header() {


  const [isDark, setThem] = useThem()
  if (isDark) {
    document.querySelector('body').classList.add('dark')
  }
  else {
    document.querySelector('body').classList.remove('dark')

  }


  return (

    <header className="header-container">
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p className="theme-changer" onClick={() => {

          setThem(!isDark)
          localStorage.setItem('them', !isDark)

        }}><i className={`fa-regular fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{`${isDark ? 'Light Mood' : 'Dark Mood'}`}</p>
      </div>
    </header>

  )
}
