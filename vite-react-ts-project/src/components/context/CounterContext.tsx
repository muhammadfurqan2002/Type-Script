import {
  ChangeEvent,
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useReducer,
} from "react";

type StateType = {
  count: number;
  text: string;
};

export const initState: StateType = { count: 0, text: " " };

const enum Reducer_Action_Type {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: Reducer_Action_Type;
  payload?: string;
};

const reducer = (
  state: typeof StateType,
  action: ReducerAction
): typeof StateType => {
  switch (action.type) {
    case Reducer_Action_Type.INCREMENT:
      return { ...state, count: state.count + 1 };
    case Reducer_Action_Type.DECREMENT:
      return { ...state, count: state.count - 1 };
    case Reducer_Action_Type.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};

const UseCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = useCallback(
    () => dispatch({ type: Reducer_Action_Type.INCREMENT }),
    []
  );
  const decrement = useCallback(
    () => dispatch({ type: Reducer_Action_Type.DECREMENT }),
    []
  );
  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Reducer_Action_Type.NEW_INPUT, payload: e.target.value });
  }, []);
  return { state, increment, decrement, handleTextInput };
};

type useUserContextType = ReturnType<typeof UseCounterContext>;

const initContextState: useUserContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
};
export const CounterContext =
  createContext<useUserContextType>(initContextState);

type childrenType = {
  children?: ReactElement | undefined;
};

export const CounterProvider = ({
  children,
  ...initState
}: childrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={UseCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};
type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};
type useCounterTextHookType = {
  text: string;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterText = (): useCounterTextHookType => {
  const {
    state: { text },
    handleTextInput,
  } = useContext(CounterContext);
  return { text, handleTextInput };
};
