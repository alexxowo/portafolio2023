import style from './footer.module.css'
import Github from 'feather-icons-react/build/IconComponents/Github'
import Linkedin from 'feather-icons-react/build/IconComponents/Linkedin'

export default function Footer () {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__header}>
          <h1 className={style.footer__header_title}><b>Alexandre</b> Marquez</h1>
          <div className={style.animate__text_slider}>
            <div className={style.animate_text}>
              <div className={style.first}>Frontend Developer</div>
              <div className={style.second}>Backend Developer</div>
              <div className={style.third}>Sys Admin</div>
            </div>
          </div>
        </div>
        <div className={style.footer__content}>
          <ul className='navigator'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Experience</a></li>
          </ul>
          <div className={style.footer__socials}>
            <a href='#' className={style.footer__socials_link}><Github size={24} /></a>
            <a href='#' className={style.footer__socials_link}><Linkedin size={24} /></a>
          </div>
        </div>
        <hr />
        <div className={style.footer__footer}>
          <div className={style.footer__footer__item}>
            <p>Contact me</p>
            <a href='#'>+58 412-6927900</a>
            <a href='mailto:alexandremarquez90@gmail.com'>alexandremarquez90@gmail.com</a>
          </div>
          <div className={style.footer__footer__item}>
            <p>You want contract me?</p>
            <p>Write me at:</p>
            <a href='mailto:alexandremarquez90@gmail.com'>alexandremarquez90@gmail.com</a>
          </div>
          <div className={style.footer__footer__item}>
            <p>Follow me and my projects on github:</p>
            <a href='https://www.github.com/alexxowo'>github.com/alexxowo</a>
          </div>
          <div className={style.footer__footer__item}>
            <p>You want know more about me?</p>
            <a href='https://www.linkedin.com/in/alexandre-manuel-m%C3%A1rquez-ortiz-8a1970169/'>linkedin.com/in/alexandremarquez90</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
