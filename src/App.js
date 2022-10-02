import './App.css';
import '../src/components/navbar/Navbar';
import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import Banner from '../src/components/banner/Banner';
import RowPost from '../src/components/rowPost/RowPost';
import CurrentBanner from './components/currentbanner/CurrentBanner';

function App() {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <RowPost/>
    <CurrentBanner/>
    </div>
  );
}

export default App;
