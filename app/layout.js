import Navigation from './components/navbar/navbar'
import UpButton from './components/upButton'
import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html className='scroll-smooth'>
      <head />
      <body>
        <UpButton />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
