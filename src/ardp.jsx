import React from "react";
import {
  Navbar,
  Welcome,
  Footer,
  Loader,
  Transactions,
  Services,
  IdlySwap,
} from "./components";

function ardp() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Services />
      <IdlySwap />
      <Transactions />
      <Footer />
    </div>
  );
}

export default ardp;
