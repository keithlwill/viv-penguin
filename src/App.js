import './App.css';
import Penguin from './components/Penguin';
import Header from './components/Header';
import Snowfall from './components/Snowfall';
import Snowfall2 from './components/Snowfall2'

function App() {
  return (
    <div className="App">
      <Snowfall />
      <Header/>
      <Penguin width = {140} height = {200}/>
    </div>
  );
}

export default App;
