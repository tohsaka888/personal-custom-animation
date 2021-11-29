import { useState } from "react";
import "./App.css";
import TextMovement from "./springs/TextMovement";

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
      <TextMovement isMove={isMove}>
        <div>111111</div>
      </TextMovement>
    </div>
  );
}

export default App;
