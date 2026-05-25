import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FiltersProvider ({children}){
    const [filters, setFiltersTest] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider
            value={{
                filters,
                setFiltersTest
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}