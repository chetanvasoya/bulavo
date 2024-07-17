import './App.css';
import "../src/Components/main.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blogarchive from './Components/Blogarchive';
import Blogpost from './Components/Blogpost';
import Careerdetails from './Components/Careerdetails';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Service from './Components/Service';
import Complain from './Components/Complain/Complain';
import Dashbord from './Components/Dashbord';
import Blog from './Components/Blog';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogarchive" element={<Blogarchive/>} />
        <Route path="/careerdetails" element={<Careerdetails/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/complain" element={<Complain/>}/>
        <Route path="/dashbord" element={
          <ProtectedRoute>
            <Dashbord/>
          </ProtectedRoute>
        }/>
        <Route path="/blogpost" element={
          <ProtectedRoute>
            <Blogpost/>
          </ProtectedRoute>
        }/>
        <Route path="/blog/:postId" element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;