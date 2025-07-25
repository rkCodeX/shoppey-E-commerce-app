import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Discount from "./components/Discount.jsx"
import Collection from "./components/newCollection.jsx"
import BestSeller from "./components/BestSeller.jsx"
import Deal from "./components/Deal.jsx"
import Product from "./components/Product.jsx"
import About from "./components/About.jsx"
import Social from "./components/Social.jsx"
import SignIU from "./components/SignIU.jsx"

function App(){
  return(
    <>
     <Routes>
      <Route path="/" element={
        <>
          <Landing pa />
          <Discount />
          <Collection />
          <BestSeller />
          <Deal />
          <Product />
          <About />
          <Social />
        </>
      } />
      <Route path="/SignIU" element={<SignIU />} />
    </Routes>
    </>
  )
}

export default App
