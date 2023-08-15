import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Table from './components/Table';
import Add from './components/input/Add';
function App() {
  return (
    <div class="container mx-auto px-4 ">
      <Navbar></Navbar>
      <Add></Add>
      <Table></Table>
    </div>
  );
}

export default App;
