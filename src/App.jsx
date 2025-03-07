import { About, Dashboard, Services, MyWork } from "./pages";
import { Navbar } from "./Components";

import "tailwindcss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <About />
      <Services />
      <MyWork />
    </div>
  );
};

export default App;
