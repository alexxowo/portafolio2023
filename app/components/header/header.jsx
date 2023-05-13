import style from './header.module.css'
import Image from 'next/image'
import Alexandre from '../../../public/alexandre.jpg'
import CVDownload from '../downloadcv/cvdownload'

export default function Header () {
  return (
    <div className={style.container} id='home'>
      <div className={style.circles}>
        <div className={style.circle1} />
        <div className={style.circle2} />
        <div className={style.circle3} />
        <div className={style.circle4} />
        <div className={style.circle5} />
        <div className={style.circle6} />
      </div>
      <div className={style.description__container}>
        <h1 className='heading-xl'>Hi, i'm <span className={style.accent}>Alexandre Marquez</span></h1>
        <small className='text-lg'>Fullstack Developer</small>
        <p className='text-md'>I am a software engineer who enjoys designing solutions for different clients, with an emphasis on the backend since 2 years, and on the frontend with almost 2 years of experience, providing new solutions to solve specific problems. Graduated as an Electronic Engineer from Universidad de Falcon in Venezuela.
        </p>
        {/* <CVDownload /> */}
      </div>
      <div className={style.image__container}>
        <Image
          src={Alexandre}
          alt='Picture of the author'
          fill
          placeholder='blur'
        />
      </div>
    </div>
  )
}
