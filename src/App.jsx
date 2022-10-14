import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Welcome,
  Footer,
  Loader,
  Transactions,
  Services,
  IdlySwap,
  LandingPage,
} from "./components";

import ardp from "./ardp";
function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="gradient-bg-welcome">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/Ardp"
            element={
              <>
                <Navbar />
                <Welcome />
                <Services />
                <IdlySwap />
                <Transactions />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/Swap" element={<IdlySwap />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
