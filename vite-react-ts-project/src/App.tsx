import {
  useCallback,
  useEffect,
  useState,
  MouseEvent,
  KeyboardEvent,
  useMemo,
  useRef,
  ReactNode,
  ReactElement,
} from "react";
import { CounterProvider } from "./components/context/CounterContext";
import { initState } from "./components/context/CounterContext";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

interface User {
  id: number;
  username: string;
}

type FiboFun = (n: number) => number;
const fib: FiboFun = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 2;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>([]);
  // const [count,setCount]=useState<User>({} as User);

  useEffect(() => {
    console.log("mounting");

    return () => console.log("unmounted");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  // const inputRef=useRef<HTMLInputElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  // if(!inputRef.current)

  return (
    <div>
      {/*React with Type script  */}

      {/* <Heading title="This is first sample of react with tsx"/> */}
      {/* <Section  title="Good One To Have You"> */}
      {/* this is my section title */}
      {/* <Heading title="This is first sample of react with tsx"/> */}
      {/* </Section> */}
      {/* <Counter setCount={setCount}>Count is :{count}</Counter> */}
      {/* <List items={["Coffec","Shake"]} render={(item:string)=><span>{item}</span>}> */}

      {/* </List> */}

      {/* part --------------------------------- 2 */}
      {/* <h1>{count}</h1>
        <button onClick={addTwo}>Add</button>
        <h2>{result}</h2>
        <input type="text" ref={inputRef}/> */}

      {/* part--------------------------------3 ---UseReducer*/}
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <>Count is: {num}</>}</Counter>
      </CounterProvider>
    </div>
  );
}

export default App;
