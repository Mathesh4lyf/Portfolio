import {About, Dashboard} from "./pages"
import {Navbar} from "./Components"

import "tailwindcss";

 
const App = () =>{
  return(
    <div>
      <Navbar/>
      <Dashboard/>
      <About/>
    </div>
  )
}

export default App
