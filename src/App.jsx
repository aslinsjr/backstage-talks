import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState(["blue", "brown", "grey", "light-blue", "pink"])
  
  const [windowY, setWindowY] = useState()

  function bgChanger() {
    const screenHight = window.innerHeight

    console.log(screenHight)

    const body = document.querySelector("body")

    body.style.backgroundColor = `var(--blue-bg)`

    if(windowY < screenHight / 2) {
      body.style.backgroundColor = `var(--blue-bg)`
    }

    if(windowY > screenHight - (screenHight * 0.15)) {
      body.style.backgroundColor = `var(--brown-bg)`
    }

    if(windowY > (screenHight * 2) - (screenHight * 0.15)) {
      body.style.backgroundColor = `var(--grey-bg)`
    }

    if(windowY > (screenHight * 3) - (screenHight * 0.15)) {
      body.style.backgroundColor = `var(--light-blue-bg)`
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
      <h1>The book's on the table</h1>
      {data.map((section) => {
        return (
        <section id={section}>
          <img src={section + "-book.png"} alt={section.toUpperCase() + " Image Book"} />
        </section>
      )})}
    </div>
  )
}

export default App
