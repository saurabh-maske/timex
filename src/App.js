/**
 * The function returns a div containing a Clock component.
 * @returns The `App` component is being returned, which contains a `div` with a class name of "App"
 * and another `div` with a class name of "clock". Inside the "clock" div, the `Clock` component is
 * being rendered.
 */
import "./App.css";
import Clock from "./components/Clock";
import DateTime from "./components/Datetime";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />

      <div className="clock">
        <Clock />
      </div>
      <div className="date">
        <DateTime />
      </div>
    </div>
  );
}

export default App;
