import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // react spring
  const springs = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 400px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
  });

  return (
    <div className="App flex-col space-x-16">
      <h1>what skill would you like to focus on?</h1>
      <animated.div style={springs} className="button-container">
        <button onClick={() => setCount(count + 1)}>React</button>
      </animated.div>
    </div>
  );
}

export default App;
