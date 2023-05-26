import { useEffect } from "react";

import layerBase from "../src/assets/img/layer-base.png";
import layerMiddle from "../src/assets/img/layer-middle.png";
import layerFront from "../src/assets/img/layer-front.png";
import dungeon from "../src/assets/img/dungeon.jpg";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className="main-header">
            <div className="layers">
              <div className="layer-header">
                <div className="layers-caption">Welcome to Parallax</div>
                <div className="layers-title">Fairy Forest</div>
              </div>
              <div
                className="layer layer-base"
                style={{
                  backgroundImage: `url(${layerBase})`,
                }}
              ></div>
              <div
                className="layer layer-middle"
                style={{
                  backgroundImage: `url(${layerMiddle})`,
                }}
              ></div>
              <div
                className="layer layer-front"
                style={{
                  backgroundImage: `url(${layerFront})`,
                }}
              ></div>
            </div>
          </header>
          <article
            className="main-article"
            style={{ backgroundImage: `url(${dungeon})` }}
          >
            <div className="main-article-content">
              <h2 className="main-article-content-header">To be continued</h2>
              <p className="main-article-content-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum nemo officiis itaque quae exercitationem eius sit,
                voluptates repellendus facilis aperiam ipsa numquam ea,
                voluptatum eum dolorem distinctio aliquid assumenda veritatis,
                repudiandae magni!
              </p>
            </div>
            <div className="copy">Feito com ❤ por Hércules</div>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
