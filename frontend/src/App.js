
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="container dark">
      <div className="app">
        <Header />
        <Routes>
        <Route path="/" exact  element={<NotesListPage/>}  />
        <Route path="/note/:id" element={<NotePage/>} />

        </Routes>
        <Outlet />
      </div>
    </div>
    </Router>


  );
}

export default App;
