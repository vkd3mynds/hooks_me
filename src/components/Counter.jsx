import { useState } from "react";
import { Button } from "./ui/button"
import { Minus, Plus, Redo2, Undo2 } from "lucide-react";

function Counter() {
  const [history, setHistory] = useState([0])
  const [position, setPosition] = useState(0);
  const currVal = history[position];

  const addValueToHistory =(newValue)=>{
    const newHistory = history.slice(0, position + 1);

    setHistory([...newHistory, newValue]);
    setPosition( position + 1)
  }
  const decrement = ()=>{
    addValueToHistory(currVal - 1)
  }
  const increment = ()=>{
    addValueToHistory(currVal + 1)
  }
  
  console.log(history,position)

  const undo =()=>{
    if(position > 0){
      setPosition(position - 1)
    }
  }
  const redo =()=>{
    if(position < history.length-1){
      setPosition(position + 1)
    }
  }
  return (
    <div className="flex flex-col pt-[150px] bg-gray-50">
      <h1 className="text-3xl font-bold text-slate-700">Counter with Undo/Redo</h1>
      <div className="flex flex-col mt-5 items-center gap-4">
        <div className="flex items-center justify-center">
          <div className="text-7xl font-bold tabular-nums text-slate-600">{currVal}</div>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <Button onClick={decrement}   className="custom-focus">
            <Minus />
          </Button>
          <Button onClick={increment}   className="custom-focus">
            <Plus />
          </Button>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Button disabled={position === 0} variant={"secondary"} onClick={undo}   className="custom-focus">
            Undo <Undo2 />
          </Button>
          <div className="text-sm text-muted-foreground">
            {position + 1} / {history.length}
          </div>
          <Button disabled={position === history.length -1} variant={"secondary"} onClick={redo}   className="custom-focus">
            Redo <Redo2 />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Counter;