import style from './project.module.css'
import Image from 'next/image'
import TrafficLightImage from '../../../public/projects/trafficlights.png'

export default function Projects () {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title + ' heading-lg'}>Projects</h2>
        <div className={style.projects__container}>
          <div className={style.projects__item}>
            <Image
              src={TrafficLightImage}
              alt='project'
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}
