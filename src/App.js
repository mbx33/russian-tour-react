import React from "react";
import router from "./Router";
import MainHeader from "./Header";
import Footer from "./Footer";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <MainHeader />
      {router}
      <Footer />
    </div>
  );
}

export default App;
