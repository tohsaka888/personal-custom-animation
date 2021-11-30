import { useState } from "react";
import "./App.css";
import TextMovement from "./springs/TextMovement";
import TransformCard from "./springs/TransformCard";
import { SpringConfig } from "react-spring";

const configsLeft: SpringConfig = {
  mass: 1,
  tension: 200,
  friction: 50,
  bounce: 0.8,
};

const configsRight: SpringConfig = {
  mass: 1,
  tension: 200,
  friction: 30,
  bounce: 0.8,
};

function App() {
  const [isMove, setIsMove] = useState<boolean>(true);
  return (
    <div>
      <button
        onClick={() => {
          setIsMove(!isMove);
        }}
      >
        show?
      </button>
      <TransformCard isMove={isMove} configs={configsLeft}>
        <div className="card">card</div>
      </TransformCard>
      <TextMovement
        isMove={isMove}
        initivalFontSize="1rem"
        transformFontSize="5rem"
      >
        <div style={{ textAlign: "center" }}>Hello,我是Tohsaka888</div>
      </TextMovement>
      <TransformCard
        isMove={isMove}
        configs={configsRight}
        initialX={-100}
        delay={200}
      >
        <div className="card">card</div>
      </TransformCard>
    </div>
  );
}

export default App;
