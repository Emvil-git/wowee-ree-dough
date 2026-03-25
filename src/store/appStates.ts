import { create } from "zustand"
import { type ModalModeType } from "../types/homeTypes"
import type { FilterType } from "../types/utilTypes"

interface AppStateStoreType {
    isHydrated: boolean
    setIsHydrated: (newHState: boolean) => void
    dateFormat: "default" | "normal" | "weird(US)"
    modalShow: boolean
    setModalShow: (nModalShow: boolean) => void
    modalMode: ModalModeType
    setModalMode: (nModalMode: ModalModeType) => void
    filterMode: FilterType
    setFilterMode: (nFilter: FilterType) => void
}

const useAppStateStore = create<AppStateStoreType>()(
    (set) => ({
        isHydrated: false,
        setIsHydrated: (newHState) => set({isHydrated: newHState}),
        dateFormat: "normal",
        modalShow: false,
        setModalShow: (nModalShow) => set({modalShow: nModalShow}),
        modalMode: "transaction",
        setModalMode: (nModalMode) => set({modalMode: nModalMode}),
        filterMode: "all",
        setFilterMode: (nFilter) => set({filterMode: nFilter})
    })
)

export default useAppStateStore