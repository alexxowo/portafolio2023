import style from '../styles/Home.module.css'
import es from './lang/es.json'

import Experience from './components/experience/experience'
import Skills from './components/skills/skill'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Projects from './components/projects/projects'
import { setTranslations, setDefaultLanguage } from 'react-multi-lang'


setTranslations({es})
setDefaultLanguage('es')

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
