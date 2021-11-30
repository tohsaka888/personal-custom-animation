import { useState } from "react";
import "./App.css";
import TextMovement from "./springs/TextMovement";
import TransformCard from "./springs/TransformCard";
import { SpringConfig } from "react-spring";

const configs: SpringConfig = {
  mass: 1,
  tension: 200,
  friction: 20,
  bounce: 0.6,
};

function App() {
  const [isMove, setIsMove] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsMove(!isMove);
        }}
      >
        show?
      </button>
      <TextMovement
        isMove={isMove}
        initivalFontSize="1rem"
        transformFontSize="5rem"
      >
        <div>111111</div>
      </TextMovement>
      <TransformCard isMove={isMove} configs={configs}>
        <div
          style={{
            height: "30vh",
            width: "90vw",
            background: "red",
            marginLeft: "5vw",
            borderRadius: "20px",
          }}
        >
          <div style={{ padding: "40px" }}>card</div>
        </div>
      </TransformCard>
    </div>
  );
}

export default App;
