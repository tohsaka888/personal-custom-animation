import { useState } from "react";
import "./App.css";
import TextMovement from "./springs/TextMovement";
import TransformCard from "./springs/TransformCard";
import { SpringConfig } from "react-spring";
import JumpCard from "./springs/JumpCard";
import ListTransform from "./springs/ListTransform";
import JumpText from "./springs/JumpText";

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

const items = [1, 2, 3, 4, 5];

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
      {/* <TransformCard isMove={isMove} configs={configsLeft}>
        <div className="card">card</div>
      </TransformCard>
      <TextMovement
        isMove={isMove}
        initialFontSize="1rem"
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
      </TransformCard> */}
      {/* <JumpCard height="30vh" width="10vw">
        <div style={{ height: "30vh", width: "10vw", backgroundColor: "red" }}>
          card
        </div>
      </JumpCard> */}
      <ListTransform isMove={isMove}>
        <div>111111111111111</div>
        <div>111111111111111</div>
        <div>111111111111111</div>
        <div>111111111111111</div>
        <div>111111111111111</div>
      </ListTransform>
      <JumpText isJump={isMove}>
        <div>1111111111</div>
        <div>2222222222</div>
        <div>3333333333</div>
      </JumpText>
    </div>
  );
}

export default App;
