import { createContext } from "react";
import type { FilterType } from "../../types/utilTypes";

interface HomeContextVals {
    filterMode: FilterType
    setFilterMode: (newFilter: FilterType) => void
}

// i have to rethnk my life choices

export const HomeContext = createContext<HomeContextVals>(
    {
        filterMode: "all",
        setFilterMode: () => {}
    }
)

export default HomeContext