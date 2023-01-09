import Image from 'next/image'
import style from './project.module.css'

export default function ProjectCard ({ title, description, image, technologies = [] }) {
  return (
    <div className={style.project}>
      <div className={style.project__image}>
        <Image src={image} width={260} alt='Project 1' />
      </div>
      <div className={style.project__content}>
        <h3 className='heading-sm'>{title}</h3>
        <p className='paragraph'>{description}</p>
      </div>
      {/* <hr style={{ borderColor: 'black' }} /> */}
      <div className={style.project__technologies}>
        {technologies.map(technology => (
          <span key={technology} className={style.technology}>{technology}</span>
        ))}
      </div>
      <div />
    </div>
  )
}
