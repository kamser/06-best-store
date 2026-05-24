import { useState } from 'react'

import staticData from './mock/products.json'
import { Products } from './components/Products.jsx'

function App() {

  const {products} = staticData
  return (
    <>
      <h1>Best store app</h1>
      <Products products={products}></Products>
    </>
  )
}

export default App
