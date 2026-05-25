import { useFilters } from './hooks/useFilters.jsx'

import {products as initialProducts} from './mock/products.json'

import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cartContext.jsx'


function App() {

  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts}></Products>
      <Footer />
    </CartProvider>
  )
}

export default App
