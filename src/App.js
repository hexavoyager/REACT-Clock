import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/clock/clock";
import HideItem from "./components/hide-item/hide-item";

function App() {
  return (
    <div className="App">
      <HideItem>{/* {Content => sent by props.children} */}</HideItem>
      <Clock />
    </div>
  );
}

export default App;
