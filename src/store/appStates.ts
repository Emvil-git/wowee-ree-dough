import { create } from "zustand"

interface AppStateStoreType {
    isHydrated: boolean
    setIsHydrated: (newHState: boolean) => void
}

const useAppStateStore = create<AppStateStoreType>()(
    (set) => ({
        isHydrated: false,
        setIsHydrated: (newHState) => set({isHydrated: newHState})
    })
)

export default useAppStateStore