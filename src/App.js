import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./products";
import ShoppingCart from "./cart";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./footer";
import Details from "./details";
import FaqAccordion from "./faq";
import ShopDisplay from "./shop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCode,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import useCartCount from "./useCartCount";
import PoliticaDeTrocasDevolucoes from "./pages/politicadeDevolucao";
import TermAndCondition from "./pages/terms-and-condition";
import EnviosEEntrega from "./pages/delivery";
import { ContactUs } from "./contact-us";
import Checkout from "./checkout";
import SuccessPage from "./success";


const App = () => {
  const cartCount = useCartCount();

  return (
    <>
      <Router>
      <div className="container">
          <div className="row">
          <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="https://media.graphassets.com/LwFMRB5dQJ214DUK73ok"
                className="logo"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link" aria-current="page">
                    Our Collection
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/faq" className="nav-link" aria-current="page">
                    FAQ
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/contact-us">
                    Contact-us
                  </a>
                </li>
                {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
  </li>*/}
              </ul>
              <ul className="d-flex">
                <a
                  href="/cart"
                  className="btn btn-outline-dark position-relative"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="badge badge-pill badge-danger position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                  </span>
                </a>
              </ul>
            </div>
          </div>
        </nav>
          </div>
      </div>

        <Routes>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopDisplay />} />

          <Route path="/details/:id" element={<Details />} />
          <Route path="/faq" element={<FaqAccordion />} />
          <Route path="/privacy_policy" element={<PoliticaDeTrocasDevolucoes />} />
          <Route path="/terms_and_conditions" element={<TermAndCondition />} />
          <Route path="/delivery" element={<EnviosEEntrega />} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/success" element={<SuccessPage/>} />
      
          
          
        </Routes>
      </Router>

      <Footer />
    </>
  );
};

export default App;
