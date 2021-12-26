import './App.css';
import Penguin from './components/Penguin';
import Header from './components/Header';
import Snowfall from './components/Snowfall';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Snowfall />
      <Header/>
      <Counter />
    </div>
  );
}

export default App;
