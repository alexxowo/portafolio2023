import style from './project.module.css'
import ProjectCard from './ProjectCard'
import ProjectList from './projects.json'

import Placeholder from '../../../public/placeholder.png'

export default function Projects () {
  return (
    <section className={style.wrapper} id='projects'>
      <div className={style.content}>
        <h2 className={style.title + ' heading-lg'}>Projects</h2>
        <div className={style.projects__container}>
          {ProjectList.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={Placeholder}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
