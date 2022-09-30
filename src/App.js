import './App.css';
import { useState } from 'react';

function App() {

const [mailit, setmailit] = useState('')
const [kilometrit, setkilometrit] = useState('')


function laske (e) {
  e.preventDefault()
  const tulos = mailit * 1.609
  setkilometrit(tulos)
}
  
  return (
    <div id="content">
     <h3>Mailit kilometreiksi</h3>
     <form onSubmit={laske}>
      <div>
        <label>Mailit</label>
        <input value={mailit} onChange={e => setmailit(e.target.value)}/> 
      </div>
      <div>
        <label>Kilometrit</label>
        <output>{kilometrit.toFixed(2)}</output>
      </div>
      <button>Laske</button>
     </form>
    </div>
  );
}

export default App;