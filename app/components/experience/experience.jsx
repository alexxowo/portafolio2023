import style from './experience.module.css'
import TimelineExperience from '../timeline/timeline'

export default function Experience () {
  return (
    <div className={style.experience} id='experience'>
      <TimelineExperience />
    </div>
  )
}
