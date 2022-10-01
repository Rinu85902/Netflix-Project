import './App.css';
import '../src/components/navbar/Navbar';
import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import Banner from '../src/components/banner/Banner';
import RowPost from '../src/components/rowPost/RowPost';

function App() {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <RowPost/>
    </div>
  );
}

export default App;
