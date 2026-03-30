
import './App.css'
import Navbar  from './Components/Navbar/Navbar'
import Banner from './Components/Navbar/Banner/Banner'
import Static from './Components/Static/Static'
import Primiums from "./Components/Primium/Primiums"
import Step from './Components/Step/Step'




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

    </>
  )
}

export default App
