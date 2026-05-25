import {useState, useId} from 'react'
import './filters.css'
export function Filters({onChange}){

    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(previousState => ({
            ...previousState,
            minPrice: event.target.value
        })
        )
    }

    const handleChangeCategory = (event) => {
        const newCategory = event.target.value
        onChange(previousState => ({
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
                 />
                 <span>{minPrice}</span>
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