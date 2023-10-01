import Signin from "./Auth/signin"
import Signup from "./Auth/signup"
import Navbar from "./Layout/Navbar"
import {Route, Routes} from "react-router-dom"
const App = () => {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App

