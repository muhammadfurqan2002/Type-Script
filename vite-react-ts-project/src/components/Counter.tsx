import React, { ChangeEvent, ReactNode, useReducer, useState } from "react";
import { useCounter, useCounterText } from "./context/CounterContext";

// type counterProps={
//     setCount:React.Dispatch<React.SetStateAction<number>>,
//     children:ReactNode
// }

// function Counter({children,setCount}:counterProps) {
//     return (
//     <div>
//         {children}
//                 <button onClick={()=>setCount(count=>count+1)}>+</button>
//                 <button onClick={()=>setCount(count=>count-1)}>-</button>
//     </div>
//   )
// }

// ------------------use Reducer--------------------------------

// type counterProps = {
//   children: (num: number) => ReactNode;
// };

// const initState = { count: 0, text: " " };

// const enum Reducer_Action_Type {
//   INCREMENT,
//   DECREMENT,
//   NEW_INPUT,
// }

// type ReducerAction = {
//   type: Reducer_Action_Type;
//   payload?: string;
// };

// const reducer = (
//   state: typeof initState,
//   action: ReducerAction
// ): typeof initState => {
//   switch (action.type) {
//     case Reducer_Action_Type.INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case Reducer_Action_Type.DECREMENT:
//       return { ...state, count: state.count - 1 };
//     case Reducer_Action_Type.NEW_INPUT:
//       return { ...state, text: action.payload ?? "" };
//     default:
//       throw new Error();
//   }
// };

// const Counter = ({ children }: counterProps) => {
//   //   const [count, setCount] = useState<number>(1);

//   const [state, dispatch] = useReducer(reducer, initState);
//   const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
//     dispatch({ type: Reducer_Action_Type.NEW_INPUT, payload: e.target.value });
//   };
//   return (
//     <div>
//       <h1> {children(state.count)}</h1>
//       <div>
//         <button
//           onClick={() => dispatch({ type: Reducer_Action_Type.INCREMENT })}
//         >
//           +
//         </button>
//         <button
//           onClick={() => dispatch({ type: Reducer_Action_Type.DECREMENT })}
//         >
//           -
//         </button>
//       </div>
//       <input type="text" onChange={handleTextInput} />
//       <h2>{state.text}</h2>
//     </div>
//   );
// };








type counterProps = {
    children: (num: number) => ReactNode;
  };



const Counter = ({ children }: counterProps) => {
  const {count,increment,decrement}=useCounter();
  const {text,handleTextInput}=useCounterText();
    return (
    <div>
      <h1> {children(count)}</h1>
      <div>
        <button
          onClick={increment}
        >
          +
        </button>
        <button
          onClick={decrement}
        >
          -
        </button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{text}</h2>
    </div>
  );
};





export default Counter;
