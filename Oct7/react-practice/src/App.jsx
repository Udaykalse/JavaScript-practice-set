import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import App1 from './components/app1';
import App2 from './components/app2';
import App3 from './components/app3';
import App4 from './components/app4';
import App5 from './components/app5';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/app1">Student Form</Link></li>
          <li><Link to="/app2">API Call</Link></li>
          <li><Link to="/app3">Table</Link></li>
          <li><Link to="/app4">Button</Link></li>
          <li><Link to="/app5">Todo-List</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet /> 
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="app1" element={<App1 />} />
          <Route path="app2" element={<App2 />} />
          <Route path="app3" element={<App3 />} />
          <Route path="app4" element={<App4 />} />
          <Route path="app5" element={<App5 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
