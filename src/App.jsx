import React from 'react';
import {Navbar, Welcome, Footer, Loader, Transactions, Services} from './components';
function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  );
}

export default App
