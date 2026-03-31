
import './App.css'
import Navbar  from './Components/Navbar/Navbar'
import Banner from './Components/Navbar/Banner/Banner'
import Static from './Components/Static/Static'
import Primiums from "./Components/Primium/Primiums"
import Step from './Components/Step/Step'
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer'




const dataLoad = async()=>{
  const res = await fetch("/Data.json")
  return res.json();
} 

const dataPromise = dataLoad();







function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Static></Static>
    <Primiums dataPromise={dataPromise} ></Primiums>


     <Step></Step> 

     <Pricing></Pricing>
     <Footer></Footer>

    </>
  )
}

export default App
