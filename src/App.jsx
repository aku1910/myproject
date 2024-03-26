import './App.css'
import Navi from './Navi'
import { SliderData } from './SliderData'
import ImageSlider from './ImageSlider'
import Card from './Card'
import Product from './Product'
import './Products.css'
import "./Sidebar.css"
import Section4 from './Section4'
import Slider from "./Slider";
import Checkout from './Checkout'
import "./Checkout.css"




function App() {

  return (
    <>
      <Checkout/>
      <Navi />
      <ImageSlider slides={SliderData} />
      <Card />
      <Product />
      <Section4/>
      <h5 style={{ color: 'gray' }}>Popular Items</h5>
      <Slider />
      
    </>
  )
}

export default App


