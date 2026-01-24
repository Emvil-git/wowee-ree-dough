import { useState } from 'react'
import Navigation from './components/Navigation'
import AppRoutes from './routes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <main className='flex flex-col items-center'>
        <AppRoutes/>
      </main>
    </>
  )
}

export default App
