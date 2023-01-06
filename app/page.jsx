import style from '../styles/Home.module.css'
import Image from 'next/image'
import TimelineExperience from './components/timeline/timeline'
import image from '../public/alexandre.jpg'

export default function HomePage () {
  return (
    <>
      <div className={style.container}>
        <div className={style.content__container}>
          <h1 className='heading-xl'>Hi, i'm <span className={style.accent}>Alexandre Marquez</span></h1>
          <small className='text-lg'>Fullstack Developer</small>
          <p className='text-md'>I am a software engineer who enjoys designing solutions for different clients, with an emphasis on the backend since 2 years, and on the frontend with almost 2 years of experience, providing new solutions to solve specific problems. Graduated as an Electronic Engineer from Universidad de Falcon in Venezuela.
          </p>
        </div>
        <div className={style.image__container}>
          <Image
            src={image}
            alt='Picture of the author'
            style={{ borderRadius: '100%', width: '100%', height: '100%' }}
            placeholder='blur'
          />
        </div>
      </div>
      <div className={style.experience}>
        <TimelineExperience />
      </div>
    </>
  )
}
