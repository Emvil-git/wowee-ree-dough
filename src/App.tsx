import { useEffect } from 'react'
import Navigation from './components/Navigation'
import AppRoutes from './routes'
import './App.css'
import useExStore from './store/expenses'
import useAppStateStore from './store/appStates'
import { AppModal } from './components/modal/AppModal'

function App() {
  const setIsHydrated = useAppStateStore((state) => state.setIsHydrated)
  const modalShow = useAppStateStore((state) => state.modalShow)

  useEffect(() => {
    useExStore.persist.rehydrate()
    setIsHydrated(true)
  },[])

  

  return (
    <main className='bg-stone-900 h-screen flex flex-col items-center overflow-hidden'>
      <section className='flex-1 min-h-0'>
        <AppRoutes/>
      </section>
      {modalShow && <AppModal/>}
      <Navigation/>
    </main>
  )
}

export default App
