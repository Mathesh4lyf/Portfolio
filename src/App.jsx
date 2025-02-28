import { About, Dashboard, Services } from "./pages";
import { Navbar } from "./Components";

import "tailwindcss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <About />
      <Services />
    </div>
  );
};

export default App;
