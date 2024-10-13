import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState(["blue", "brown", "grey", "light-blue", "pink"])
  const [boxShadowImage, setBoxShadow] = useState("0 0 2rem 0 var(--black-box-shadow)")
  
  const [windowY, setWindowY] = useState()

  function bgChanger() {
    const screenHight = window.innerHeight

    console.log(screenHight)

    const body = document.querySelector("body")

    body.style.backgroundColor = `var(--blue-bg)`

    if(windowY < screenHight / 2) {
      body.style.backgroundColor = `var(--blue-bg)`
      setBoxShadow("0 0 2rem 0 var(--white)")
    }

    if(windowY > screenHight - (screenHight * 0.15)) {
      body.style.backgroundColor = `var(--brown-bg)`
      setBoxShadow("0 0 2rem 0 var(--black-box-shadow)")
    }

    if(windowY > (screenHight * 2) - (screenHight * 0.15)) {
      body.style.backgroundColor = `var(--grey-bg)`
      setBoxShadow("0 0 2rem 0 var(--white)")
    }

    if(windowY > (screenHight * 3) - (screenHight * 0.15)) {
      body.style.backgroundColor = `var(--light-blue-bg)`
      setBoxShadow("0 0 2rem 0 var(--black-box-shadow)")
    }

    if(windowY > (screenHight * 4) - (screenHight * 0.15)) {
      body.style.backgroundColor = `var(--pink-bg)`
    }
  }

  document.addEventListener('scroll', () => {
    setWindowY(window.scrollY)
  })

  useEffect(() => {

    console.log(windowY)

    bgChanger()

  }, [windowY])

  return (
    <div className="app">
      <h1>Book Section Page</h1>
      {data.map((section) => {
        return (
        <section id={section}>
          <img className="book-image" style={{boxShadow: boxShadowImage}} src={section + "-book.png"} alt={section.toUpperCase() + " Image Book"} />
        </section>
      )})}
    </div>
  )
}

export default App
