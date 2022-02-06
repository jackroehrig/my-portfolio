import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/resume' element={<Resume />}/>
      </Routes>
    </div>
  );
}

export default App;
