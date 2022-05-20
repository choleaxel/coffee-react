// import CCoffee from "./components/CCoffee";
import ContactForm from './components/ContactForm'
import FCoffee from './components/FCoffee'
import Small from './components/Small'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <>
      {/* <CCoffee firstName='Nichole' /> */}
      <ContactForm />
      <FCoffee firstName='Nichole' />
      <Small />
    </>
  )
}

export default App