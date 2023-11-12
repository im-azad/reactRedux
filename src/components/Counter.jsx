import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

// eslint-disable-next-line react/prop-types
function Counter({ count, increment, decrement, id }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <p>Counter ID: {id}</p>
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps:", ownProps);
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

// higher order function that take a component as a parameter and return new component
// const NewComponent = HOC(OriginalComponent)
// connect() করলে একটা HOC পাই (component_pass)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
