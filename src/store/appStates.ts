import { create } from "zustand"
import { type ModalModeType } from "../types/homeTypes"

interface AppStateStoreType {
    isHydrated: boolean
    setIsHydrated: (newHState: boolean) => void
    dateFormat: "default" | "normal" | "weird(US)"
    modalShow: boolean
    setModalShow: (nModalShow: boolean) => void
    modalMode: ModalModeType
    setModalMode: (nModalMode: ModalModeType) => void
}

const useAppStateStore = create<AppStateStoreType>()(
    (set) => ({
        isHydrated: false,
        setIsHydrated: (newHState) => set({isHydrated: newHState}),
        dateFormat: "normal",
        modalShow: false,
        setModalShow: (nModalShow) => set({modalShow: nModalShow}),
        modalMode: "transaction",
        setModalMode: (nModalMode) => set({modalMode: nModalMode})
    })
)

export default useAppStateStore