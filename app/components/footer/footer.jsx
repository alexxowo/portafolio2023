import style from './footer.module.css'

export default function Footer () {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__item}>
          <h3 className='heading-md'>Contact</h3>
        </div>
      </div>
    </footer>
  )
}
