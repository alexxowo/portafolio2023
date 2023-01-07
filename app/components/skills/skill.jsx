import style from './skill.module.css'

export default function Skill ({ title, skills }) {
  return (
    <div className={style.skills}>
      <div className={style.skills__container}>
        <h2 className='heading-lg'>Skills</h2>
        <div className={style.skills__item}>
          <h3 className='heading-md'>Backend</h3>
          <ul className='list'>
            <li>Express</li>
            <li>NodeJS</li>
            <li>.NET</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className={style.skills__item}>
          <h3 className='heading-md'>Languages</h3>
          <ul className='list'>
            <li>JavaScript / TypeScript</li>
            <li>C#</li>
            <li>Python</li>
          </ul>
        </div>
        <div className={style.skills__item}>
          <h3 className='heading-md'>Frontend</h3>
          <ul className='list'>
            <li>ReactJS</li>
            <li>NextJS</li>
          </ul>
        </div>
      </div>
      <div className={style.skills__about}>
        <h2>Know more...</h2>
        <p>
          I am a software developer with experience in areas such as backend, frontend and process automation with Git Hooks and scripting on servers and network equipment (switches and routers, especially from Mikrotik). My main skills are related to the backend, as administrator of linux-based servers, SQL databases (PostgreSQL and MySQL), and API development with NodeJS and .NET. But I also have experience in the frontend, with ReactJS and NextJS, using tailwindcss for interface design. Aspiring mobile developer with React Native and Pentester.
        </p>
      </div>
    </div>
  )
}
