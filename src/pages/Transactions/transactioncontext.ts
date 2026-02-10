import { createContext } from "react"

interface TransacContextValues {
    filterMonth: string,
    setFilterMonth: (newFMonth: string) => void
    filterYear: string
    setFilterYear: (newFYear: string) => void,
    isFiltered: boolean,
    setIsFiltered: (newIF: boolean) => void
}

export const TxPageContext = createContext<TransacContextValues>(
    {
        filterMonth: '',
        setFilterMonth: () => {},
        filterYear: '',
        setFilterYear: () => {},
        isFiltered: false,
        setIsFiltered: () => {}
    }
)