import useAnimation from "../useAnimation";
import "./styles.css";
import { useEffect, useState } from "react";
import song from "./suno.mp3";

import kahani from "./kahani";

var audio = new Audio(song);

export default function Story({ goto }) {
  const [current, setCurrent] = useState(0);
  const [toggleMusic, setToggleMusic] = useState(false);
  const { mainPlay, mainStyle, nextPlay, nextStyle, prevPlay, prevStyle } =
    useAnimation();

  useEffect(() => {
    if (toggleMusic) {
      audio.play();
    } else audio.pause();
  }, [toggleMusic]);

  const openWhatsapp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=+918791659121&text=I miss you ❤️`,
    );
  };

  return (
    <>
      {toggleMusic && (
        <div
          style={{
            color: "white",
            fontSize: "1rem",
            position: "absolute",
            top: "50px",
            right: "20px",
          }}
          onClick={() => setToggleMusic(false)}
        >
          tap to turn off music
        </div>
      )}
      <div
        className="Story fade-in-image"
        style={{
          // backgroundColor: colors[current - 26] || colors[0],
          padding: "0px",
        }}
      >
        {current > 0 && (
          <div
            className="card"
            style={prevStyle}
            onClick={() => {
              prevPlay(true);
              setCurrent(current - 1);
            }}
          >
            <p>{kahani[current - 1]}</p>
          </div>
        )}
        {kahani[current] && (
          <div
            className="card"
            style={mainStyle}
            onClick={() => {
              mainPlay(true);
              nextPlay(true);
              setTimeout(() => {
                setCurrent(current + 1);
              }, 500);
              if (current === kahani.length - 2) {
                setToggleMusic(true);
              }
              if (current === kahani.length - 1) {
                // setToggleMusic(true);
                openWhatsapp();
                setCurrent(0);
              }
            }}
          >
            <p>{kahani[current]}</p>
          </div>
        )}
        {kahani[current + 1] && (
          <div className="card" style={nextStyle}>
            <p>{kahani[current + 1]}</p>
          </div>
        )}
      </div>
    </>
  );
}
