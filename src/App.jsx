import { useState, useEffect } from "react";
import mulheresImg from "./assets/mulheres.png";
import promocaoImg from "./assets/promocao-img.webp";
import "./App.css";

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
      </main>

      <body>
        <section>
          <h1>Conheça nossos produtos!</h1>

          <div className="container-produtos">
            <div className="produtos">
              <h2>PRODUTOS AKI</h2>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default App;
