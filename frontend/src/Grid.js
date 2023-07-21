import { useContext, useMemo, useState } from "react";
import { ClickCountsContext } from "./App";


function SquareView(props) {
    const { clickCounts, setClickCounts } = useContext(ClickCountsContext);
    const [bState, setBState] = useState(0)

    return (
        <button onClick={()=>{
            // for deselecting option
            if (bState !== 0) {
                setBState(0)
                setClickCounts(clickCounts-1)
            } else if (clickCounts === 0) {
                // for selecting starts
                setBState(1)
                setClickCounts(clickCounts+1)
            } else if (clickCounts <= 3) {
                // for selecting ends
                setBState(2)
                setClickCounts(clickCounts+1)
            } else if (clickCounts === 4) {
                // for selecting best start
                setBState(3)
            }
        }}>
            bstate = {bState}
        </button>
    )
}

function Grid(props) {
    let gridInit = Array(props.gridSize)
    
    
    const [selectedGrid, setSelectedGrid] = useState(gridInit)
    
    useMemo(()=>{
        for (let i = 0; i < props.gridSize; i++) { 
            gridInit[i] = Array(props.gridSize);
            for (let j = 0; j < props.gridSize; j++) { 
                gridInit[i][j] = 0;
                
            }
        }
        setSelectedGrid(gridInit)
    },[props])
    
    console.log(selectedGrid);
    return (
        <div>
            {selectedGrid.map((val, i) => {
                return (
                    <div>
                        {selectedGrid[i].map((val, j) => {
                            return <SquareView model={val}></SquareView>
                        })}
                    </div>
                )
                
            })}
        </div>
    )
}

export default Grid