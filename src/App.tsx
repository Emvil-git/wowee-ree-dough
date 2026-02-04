import { useEffect } from 'react'
import Navigation from './components/Navigation'
import AppRoutes from './routes'
import './App.css'
import useExStore from './store/expenses'
import useAppStateStore from './store/appStates'

function App() {
  const setIsHydrated = useAppStateStore((state) => state.setIsHydrated)

  useEffect(() => {
    useExStore.persist.rehydrate()
    setIsHydrated(true)
  },[])

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
