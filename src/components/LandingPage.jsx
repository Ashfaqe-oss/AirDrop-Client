import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center font-mono text-2xl md:flex-row">
      <Link to="/Ardp">
        <button className="text-white m-5 md:m-8 p-10 border ">Go to AirDrop</button>
      </Link>

      <Link to="/Swap">
        <button className="text-white m-5 md:m-8 p-10 border">Go to DosaSwap</button>
      </Link>
    </div>
  );
}

export default LandingPage;
