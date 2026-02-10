import { createContext } from "react";
import type { ModalModeType } from "../../types/homeTypes";

interface HomeContextVals {
    homeModalShow: boolean;
    setHomeModalShow: (homeModalShow: boolean) => void;
    modalMode: ModalModeType,
    setModalMode: (newMM: ModalModeType) => void
}

export const HomeContext = createContext<HomeContextVals>(
    {
        homeModalShow: false,
        setHomeModalShow: () => {},
        modalMode: "transaction",
        setModalMode: () => {}
    }
)

export default HomeContext