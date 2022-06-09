import Counter from "./component/counter";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <h1>COUNTER</h1>
      <Counter counter={0} />
    </div>
  );
}

export default App;
