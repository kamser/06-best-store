import { useState } from 'react'

import {products as initialProducts} from './mock/products.json'
import { Products } from './components/Products.jsx'

function App() {

  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  
  return (
    <>
      <h1>Best store app</h1>
      <Products products={products}></Products>
    </>
  )
}

export default App
