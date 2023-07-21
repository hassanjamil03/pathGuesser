import { createContext, useState } from "react";
import Grid from "./Grid";


const ClickCountsContext = createContext()

function App() {
  const [gridSize, setGridSize] = useState(5)

  const handleIncrement = () => {
    setGridSize(gridSize + 1);
  };

  const handleDecrement = () => {
    setGridSize(gridSize - 1);
  };

  const [clickCounts, setClickCounts] = useState(0)


  return (

    <div>
      <h3>
        First click will select the ending point, second, third, and fourth clicks set start point, 
        and fifth click selects the start point you predict will finish first.
      </h3>
      <button onClick={handleIncrement}>Increment</button>
      <h2>Gridsize: {gridSize}</h2>
      clickCounts is {clickCounts}
      <button onClick={handleDecrement}>Decrement</button>

      <ClickCountsContext.Provider value={{ clickCounts, setClickCounts }}>
        <Grid gridSize={gridSize}></Grid>
      </ClickCountsContext.Provider>
    </div>
  );
}

export {
  App,
  ClickCountsContext
};
