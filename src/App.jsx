import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Pages } from "./pages/Pages"


export const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Pages/>
    </BrowserRouter>
  )
}

