import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="alert alert-success alert-dismissible">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <strong>Success!</strong> This alert box could indicate a successful or positive action.
</div>
      <Footer/>
    </div>
  );
}

export default App;
