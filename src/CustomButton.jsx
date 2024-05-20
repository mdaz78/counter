const CustomButton = ({ count, setCount }) => {
  return <button onClick={() => setCount(count + 1)}>Counter {count}</button>;
};

export default CustomButton;
