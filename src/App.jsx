import { useState } from 'react'

import {products as initialProducts} from './mock/products.json'
import { Products } from './components/Products.jsx'

function App() {

  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 100
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return(
        product.price >= filters.minPrice
        &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <h1>Best store app</h1>
      <Products products={filteredProducts}></Products>
    </>
  )
}

export default App
