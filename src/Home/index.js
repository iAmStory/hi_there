import React, { useEffect, useState } from "react";
import { Animate, AnimateGroup } from "react-simple-animate";

function Home({ goto }) {
  const [hash, setHash] = useState([]);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const text = 'ANAMIKA';

    // set document title to "Hi, text"
    document.title = `Hi, ${text}`;

    // split text into array
    const splitText = text.split("");
    setHash(splitText);
    setTimeout(() => {
      setPlay(true);
    }, 1000);
  }, []);

  return (
    <div
      className="baseBg fade-in-image"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
      }}
      onClick={() => goto()}
    >
      <div style={{ fontSize: "2rem" }}>
        <h1>Hi 👋🏻</h1>
        <span style={{ fontSize: '4rem' }}>
          <AnimateGroup play={play}>
            {hash.map((item, index) => {
              return (
                <Animate
                  key={item}
                  sequenceIndex={index}
                  start={{ opacity: 0, transform: "translateY(-10px)" }}
                  end={{ opacity: 1, transform: "translateY(0)" }}
                >
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {item}
                  </div>
                </Animate>
              );
            })}
          </AnimateGroup>
        </span>
      </div>
    </div>
  );
}

export default Home;
