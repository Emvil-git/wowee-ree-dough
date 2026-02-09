import { create } from "zustand"

interface AppStateStoreType {
    isHydrated: boolean
    setIsHydrated: (newHState: boolean) => void
    dateFormat: "default" | "normal" | "weird(US)"
}

const useAppStateStore = create<AppStateStoreType>()(
    (set) => ({
        isHydrated: false,
        setIsHydrated: (newHState) => set({isHydrated: newHState}),
        dateFormat: "normal"
    })
)

export default useAppStateStore