import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Dashboard from './Pages/Dashboard';
import Outreach from './Pages/Outreach';
import Prospects from './Pages/Prospects';
import Inbox from './Pages/Inbox';
import Insights from './Pages/Insights';
import Settings from './Pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={'/dashboard'} element={<Dashboard />} />
        <Route exact path={'/outreach'} element={<Outreach />} />
        <Route exact path={'/prospects'} element={<Prospects />} />
        <Route exact path={'/inbox'} element={<Inbox />} />
        <Route exact path={'/insights'} element={<Insights />} />
        <Route exact path={'/settings'} element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
