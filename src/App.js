import './App.css';
import Home from './Home';
import { useState } from 'react';
import Story from './Story';

function App() {
  const [route, setRoute] = useState('home');
  return (
    <div style={{ height: '100vh' }}>
      {route === 'home' && <Home goto={() => setRoute('story')} />}
      {route === 'story' && <Story />}
    </div>
  );
}

export default App;
