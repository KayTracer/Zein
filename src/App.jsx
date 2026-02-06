import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import mulheresImg from "./assets/mulheres.png";
import promocaoImg from "./assets/promocao-img.webp";
import "./App.css";
import Menu from "./Menu.jsx";
import produtos from "./data/produtos.js";

function App() {
  const [count, setCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 1 : prev + 1));
    }, 2700);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        <div className="container-header">
          <div id="h2-logo">
            <h2>ZEIN</h2>
          </div>
          <div className="cart-icones">
            <ion-icon name="cart-outline"></ion-icon>
            <a href="https://www.instagram.com/kayn.tracer/#">
              <ion-icon name="globe-outline"></ion-icon>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section-carrossel">
          <div className="container-carrossel">
            <div className="carrossel">
              <input
                type="radio"
                name="radio-btn"
                id="radio1"
                checked={currentSlide === 1}
                onChange={() => setCurrentSlide(1)}
              />
              <input
                type="radio"
                name="radio-btn"
                id="radio2"
                checked={currentSlide === 2}
                onChange={() => setCurrentSlide(2)}
              />
              <div className="slide first">
                <img src={mulheresImg} alt="Mulheres" />
              </div>
              <div className="slide">
                <img src={promocaoImg} alt="Promoção" />
              </div>
              <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
              </div>
            </div>
            <div className="manual-navigation">
              <label htmlFor="radio1" className="manual-btn"></label>
              <label htmlFor="radio2" className="manual-btn"></label>
            </div>
          </div>
        </section>

        <section className="section-produtos">
          <h1>Conheça nossos produtos!</h1>

          <div className="container-produtos">
            <div className="produtos"></div>
          </div>
        </section>
      </main>

      <Routes>
        <Route path="/" element={<Menu produtos={produtos} />} />
      </Routes>

      <footer>
        <div className="footer-content">
          <p>Informações da Empresa</p>
          <ul style={{ listStyleType: "none" }}>
            <li>Sobre Zein</li>
            <li>Venda na Zein</li>
          </ul>
        </div>
        <div className="footer-content">
          <p>Ajuda e Suporte</p>
          <ul style={{ listStyleType: "none" }}>
            <li>Loren ipson</li>
            <li>Remit ipson dor</li>
          </ul>
        </div>

        <div className="Redes">
          <h3>ENCONTRE-NOS EM</h3>
          <div className="icon-redes">
            <a href="https://www.instagram.com/kayn.tracer/#">
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </a>
            <a
              className="iconF"
              href="https://www.linkedin.com/in/caina-682789264/"
            >
              <ion-icon size="large" name="logo-linkedin"></ion-icon>
            </a>
            <a className="iconF" href="https://github.com/KayTracer">
              <ion-icon size="large" name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
