import './App.css';
import {Home} from '../Home'
import { Instructions } from '../Instructions';
import { Results } from '../Results';
import { Questions } from '../Play';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/instructions' element={<Instructions/>}></Route>
        <Route path='/Questions/' element={<Questions/>}></Route>
        <Route path='/Results/:score' element={<Results/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

