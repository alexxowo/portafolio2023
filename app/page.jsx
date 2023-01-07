import style from '../styles/Home.module.css'

import Experience from './components/experience/experience'
import Skills from './components/skills/skill'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Projects from './components/projects/projects'

export default function HomePage () {
  return (
    <div className={style.wrapper}>
      <Header />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
