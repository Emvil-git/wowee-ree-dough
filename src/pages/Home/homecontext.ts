import { createContext } from "react";
import type { FilterType } from "../../types/utilTypes";

interface HomeContextVals {
    filterMode: FilterType
    setFilterMode: (newFilter: FilterType) => void
}

export const HomeContext = createContext<HomeContextVals>(
    {
        filterMode: "all",
        setFilterMode: () => {}
    }
)

export default HomeContext