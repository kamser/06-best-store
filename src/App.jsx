import { useFilters } from './hooks/useFilters.jsx'

import {products as initialProducts} from './mock/products.json'

import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'


function App() {

  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header/>
      <Products products={filteredProducts}></Products>
      <Footer />
    </>
  )
}

export default App
