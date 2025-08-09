import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import Home from "./pages/Home";
import Footer from "./componentes/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
  const { token } = useContext(UserContext);

  console.log(" ---->", token);

  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/pizzeria.mammamia.github.io/" Component={Home} />

          <Route
            path="/pizzeria.mammamia.github.io/pizza/:id"
            Component={Pizza}
          />

          <Route path="/pizzeria.mammamia.github.io/cart" Component={Cart} />
          {!token ? (
            <>
              <Route
                path="/pizzeria.mammamia.github.io/profile"
                Component={Login}
              />

              <Route
                path="/pizzeria.mammamia.github.io/register"
                Component={Registro}
              />

              <Route
                path="/pizzeria.mammamia.github.io/login"
                Component={Login}
              />
            </>
          ) : (
            <>
              <Route
                path="/pizzeria.mammamia.github.io/profile"
                Component={Profile}
              />

              <Route
                path="/pizzeria.mammamia.github.io/register"
                Component={Home}
              />

              <Route
                path="/pizzeria.mammamia.github.io/login"
                Component={Home}
              />
            </>
          )}
          <Route path="/pizzeria.mammamia.github.io/404" Component={NotFound} />
        </Routes>
      </Router>
      <Footer />
    </CartProvider>
  );
}

export default App;
