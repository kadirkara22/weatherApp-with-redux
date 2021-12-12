
import './App.css';
import Countries from './components/countries';
import Days from './components/days/Days';

import Konum from './components/konum/Konum';


function App() {
  return (
    <div className="App">
      <Countries />
      <Konum />
      <Days />
    </div>
  );
}

export default App;
