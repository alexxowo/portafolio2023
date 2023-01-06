import styles from './timeline.module.css'

const timeline = [
  {
    title: 'Alpha Technology',
    subtitle: 'Sys Admin - Backend Engineer / Actual',
    description: 'Development of new features for the main product of the company. Management of servers and databases.'
  },
  {
    title: 'Leberp Core Spain S.L',
    subtitle: 'Backend Developer / Actual',
    description: 'Development of new features for the main product of the company. Management of servers and databases.'
  },
  {
    title: 'Besser Solutions C.A',
    subtitle: 'Fullstack Developer / 1y 6m',
    description: 'Development of internal tools, and web applications for the company. Management of servers and databases. Scripting with bash and python. Deployment of docker containers and network monitors.'
  }
]

export default function Timeline () {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className='heading-lg '>Experience</h2>
        <div className={styles.timeline}>
          {timeline.map(({ title, subtitle, description }, index) => (
            <TimelineContent
              key={title}
              title={title}
              subtitle={subtitle}
              description={description}
              style={[styles.container, index % 2 === 0 ? styles.left : styles.right].join(' ')}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function TimelineContent ({ title, subtitle, description, style }) {
  return (
    <div className={style}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <small>{subtitle}</small>
        <p>{description}</p>
      </div>
    </div>
  )
}
