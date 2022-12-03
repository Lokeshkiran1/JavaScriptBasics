import logo from './logo.svg';
import './App.css';
import Wishes from './components/Wishes';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import Hello from './components/Hello';
import SayHi from './components/properties';
import Property from './components/property';
import Props from './components/props';
import Message from './components/MessageStateC';
import Cart from './components/CartStateC';
import Counter from './components/Counter';
import Destr from './components/DestructureFunc';
import DestrClass from './components/DestructureClass';

function App() {
  return (
    <div className="App">
      <DestrClass name='Sachin' movie='cricket'/>
      {/* <Destr name='Sachin' movie='cricket'/> */}
      {/* <Counter /> */}
      {/* <Cart /> */}
      {/* <Message />
      <Wishes />
      <Greet />
      <Welcome />
      <Greeting />
      <Hello />
      <SayHi name="Naveen"/>
      <SayHi name="Kumar"/>
      <SayHi name="Anvith"/>
      <Property name="Naveen" film="Avatar"/>
      <Property name="Kumar" film="Fast & Furious"/>
      <Property name="Anvith" film="Luci"/>
      <Props name="Dhoni" sport="cricket">
        <p>I guess so !!!!!!!!</p>
      </Props>
      <Props name="Ronaldo" sport="FootBall">
        <button>Yes </button><button> No</button>
      </Props>
      <Props name="Pavan" sport="Kabaddi">
        <button>Yes</button><button>No</button>
      </Props>
      <Props name="Messi" sport="FootBall"/>
      <Props name="sachin" sport="Cricket"/>*/}
    </div>
  );
}

export default App;
