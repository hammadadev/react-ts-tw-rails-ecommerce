import Signin from "./features/components/Auth/signin"
import Signup from "./features/components/Auth/signup"
import {Products} from "./features/components/products/products"
import Navbar from "./features/components/Layout/Navbar"
import {Route, Routes} from "react-router-dom"

const App = () => {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App

