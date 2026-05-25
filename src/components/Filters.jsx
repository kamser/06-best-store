import {useId, useContext} from 'react'
import './filters.css'
import { FiltersContext } from '../context/filtersContext'
export function Filters(){

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const {filters, setFilters} = useContext(FiltersContext)

    const handleChangeMinPrice = (event) => {
        setFilters(previousState => ({
            ...previousState,
            minPrice: event.target.value
        })
        )
    }

    const handleChangeCategory = (event) => {
        const newCategory = event.target.value
        setFilters(previousState => ({
            ...previousState,
            category: newCategory
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
                <input 
                type="range"
                id={minPriceFilterId}
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                 />
                 <span>{filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="beauty">Belleza</option>
                    <option value="groceries">Comida</option>
                    <option value="fragrances">Perfumes</option>
                </select>
            </div>

        </section>
    )
}