import { useEffect, useRef } from 'react'
import './App.css'
import Jollof from './pages/jollof.jsx'
import Waakye from './pages/waakye.jsx'
import Beans from './pages/beans.jsx'
import Friedrice from './pages/friedrice.jsx'

function App() {
  const sectionRefs = useRef([])

  const setSectionRef = (element) => {
    if (element && !sectionRefs.current.includes(element)) {
      sectionRefs.current.push(element)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.55) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '0px 0px -15% 0px' }
    )

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <section ref={setSectionRef} className="reveal-section">
        <Waakye />
      </section>
      <section ref={setSectionRef} className="reveal-section">
        <Jollof />
      </section>
      <section ref={setSectionRef} className="reveal-section">
        <Friedrice />
      </section>
      <section ref={setSectionRef} className="reveal-section">
        <Beans />
      </section>
      <section ref={setSectionRef} className="reveal-section">
        <Waakye />
      </section>
    </div>
  )
}

export default App
