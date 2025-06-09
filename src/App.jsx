import { useState } from "react";

import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import Home from "./Home";
import Footer from "./componentes/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./Registro";
import Login from "./Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      {/*<Registro/>*/}
      <Home />
      {/*<Login />*/}
      <Footer />
    </>
  );
}

export default App;
