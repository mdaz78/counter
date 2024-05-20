import React from "react";
import "./App.css";
import CustomButton from "./CustomButton";

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <div>
        <CustomButton count={counter} setCount={setCounter} />
      </div>
    </>
  );
}

export default App;
