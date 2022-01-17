import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
