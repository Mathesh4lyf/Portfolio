import { About, Dashboard, Services, MyWork, Contact } from "./pages";
import { Navbar } from "./Components";

import "tailwindcss";
// import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  );
};

export default App;
