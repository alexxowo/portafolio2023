import style from './project.module.css'

export default function Projects () {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title + ' heading-lg'}>Projects</h2>
        <div className={style.projects__container}>
          <p>Projects empty (Work in Progress)</p>
        </div>
      </div>
    </section>
  )
}
