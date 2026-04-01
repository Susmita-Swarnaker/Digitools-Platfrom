
import './App.css'
import Navbar  from './Components/Navbar/Navbar'
import Banner from './Components/Navbar/Banner/Banner'
import Static from './Components/Static/Static'
import Primiums from "./Components/Primium/Primiums"
import Step from './Components/Step/Step'
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer'
import Carts  from './Components/Carts/Carts'
import { useState } from 'react'



const dataLoad = async()=>{
  const res = await fetch("/Data.json")
  return res.json();
} 

const dataPromise = dataLoad();







function App() {
  const [carts,setCarts] = useState([])
  console.log(carts);

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Static></Static>
    <Primiums dataPromise={dataPromise}  carts={carts} setCarts={setCarts} ></Primiums>
   
<Carts carts={carts} setCarts={setCarts}></Carts>

     <Step></Step> 

     <Pricing></Pricing>
     <Footer></Footer>

    </>
  )
}

export default App
