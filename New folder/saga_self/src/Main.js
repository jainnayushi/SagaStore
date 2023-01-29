import { decCount, incCount, display } from "./action";
import { useDispatch, useSelector } from "react-redux";
import "../src/index.css";
function Main() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.changeCount);
  let name = useSelector((state) => state.changeName);

  return (
    <div className="main">
      <button className="btn" onClick={() => dispatch(decCount())}>
        <span>-</span>
      </button>
      <h1>{number}</h1>
      <button className="btn" onClick={() => dispatch(incCount())}>
        <span>+</span>
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(display(name))}>
        <span>{name}</span>
      </button>
    </div>
  );
}

export default Main;
