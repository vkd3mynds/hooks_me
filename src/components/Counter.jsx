import { useState } from "react";
import {Button} from "./ui/button"
import { Minus, Plus } from "lucide-react";

function Counter() {
    const [history,setHistory] = useState([0])
    const [position,setPosition] = useState(0);
    const currVal = history[position]

    return (
      <div classNameName="flex pt-[150px] justify-center bg-gray-50">
        <h1>Counter with Undo/Redo</h1>
        <div className="flex justify-center gap-4 items-center">
            <div className="flex items-center justify-center">
                <div className="text-7xl font-bold tabular-nums text-slate-600">{currVal}</div>
            </div>
            <Button>
                <Minus/>
            </Button>
            <Button>
                <Plus/>
            </Button>
        </div>
      </div>
    );
  }
  
  export default Counter;