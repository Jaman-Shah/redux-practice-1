import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="mt-4">
      <Button onClick={() => dispatch(increment(5))}>Increase 5</Button>
      <p>{count}</p>
      <Button onClick={() => dispatch(decrement(5))}>Decrease 5</Button>
      <Button onClick={() => dispatch(decrement(2))}>Decrease 2</Button>
    </div>
  );
};

export default Counter;
