import style from './project.module.css'
import ProjectCard from './ProjectCard'

import Placeholder from '../../../public/placeholder.png'

const PROJECTS = [
  {
    id: 1,
    title: 'Smart Traffic Lights',
    description: 'Implementation of a smart traffic light using object detection with Firefly RK3566 and ESP32',
    image: Placeholder,
    technologies: ['Python', 'C++', 'Tensorflow', 'ESP32']
  },
  {
    id: 2,
    title: 'Besser 97.5FM Website',
    description: 'Website for a local radio station in Venezuela, built with Next.js and tailwindcss.',
    image: Placeholder,
    technologies: ['Tailwincss', 'Next.js', 'React']
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'An simple weather app built with React Native, using expo and consuming the OpenWeather API.',
    image: Placeholder,
    technologies: ['React Native', 'Expo']
  }]

export default function Projects () {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title + ' heading-lg'}>Projects</h2>
        <div className={style.projects__container}>
          {PROJECTS.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
