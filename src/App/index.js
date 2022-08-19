import './App.css';
import {Home} from '../Home'
import { Instructions } from '../Instructions';
import { Results } from '../Results';
import { Questions } from '../Play';
import {HashRouter, Route, Routes,Switch} from 'react-router-dom'
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/instructions' element={<Instructions/>}></Route>
        <Route path='/Questions/' element={<Questions/>}></Route>
        <Route path='/Results/:score' element={<Results/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

