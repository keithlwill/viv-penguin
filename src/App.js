import './App.css';
import Penguin from './components/Penguin';
import Header from './components/Header';
import Snowfall from './components/Snowfall';

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
