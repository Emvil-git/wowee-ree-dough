import { create } from "zustand"

interface AppStateStoreType {
    isHydrated: boolean
    setIsHydrated: (newHState: boolean) => void
    dateFormat: "default" | "normal" | "weird(US)",
    doIHateYou: boolean,
    whyIHateYou: string
    setHate: (newHate: string) => void
}

const useAppStateStore = create<AppStateStoreType>()(
    (set) => ({
        isHydrated: false,
        setIsHydrated: (newHState) => set({isHydrated: newHState}),
        dateFormat: "default",
        doIHateYou: false,
        whyIHateYou: "I just do",
        setHate: (newHate) => set({whyIHateYou: newHate})
    })
)

export default useAppStateStore