import { useState } from 'react'

import { useFilters } from './hooks/useFilters.jsx'

import {products as initialProducts} from './mock/products.json'

import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'


function App() {

  const [products] = useState(initialProducts)
  const {filterProducts, setFilters} = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}></Products>
      <Footer />
    </>
  )
}

export default App
