import { useState } from 'react'

import {products as initialProducts} from './mock/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.jsx'

function App() {

  const [products, setProducts] = useState(initialProducts)
  const {filterProducts, setFilters} = useFilters({products})

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}></Products>
    </>
  )
}

export default App
