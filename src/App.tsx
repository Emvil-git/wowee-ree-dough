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
    <>
      <Navigation/>
      <main className='flex flex-col items-center'>
        <AppRoutes/>
      </main>
      {modalShow && <AppModal/>}
    </>
  )
}

export default App
