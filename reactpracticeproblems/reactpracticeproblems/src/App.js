import logo from './logo.svg';
import './App.css';
import Wishes from './components/Wishes';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Wishes />
      <Greet />
      <Welcome />
      <Greeting />
    </div>
  );
}

export default App;
