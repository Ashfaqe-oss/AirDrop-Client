import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Welcome,
  Footer,
  Loader,
  Transactions,
  Services,
  DosaSwap,
  LandingPage,
} from "./components";
import {useEthers} from '@usedapp/core';
import styles from './styles'
import {uniswapLogo} from './assets'

// import ardp from "./ardp";
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
                <Transactions />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/Swap" element={<DosaSwap />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
