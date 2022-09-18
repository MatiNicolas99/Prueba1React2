import { Route, Routes } from "react-router-dom"
import { Contacto } from "./Contacto"
import { Home } from "./Home"


export const Pages = () => {
  return (
    <Routes> 
    <Route path="/" element={<Home />} />
    <Route path="/Contacto" element={<Contacto />} />
</Routes> 
  )
}
