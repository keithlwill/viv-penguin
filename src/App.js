import logo from './logo.svg';
import './App.css';
import Penguin from './components/Penguin';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Penguin width = {140} height = {200}/>
    </div>
  );
}

export default App;
