
import './App.css';
import { Outlet} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer"
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import { setBannerData, setImageURL } from './store/cinemateSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  // Fetch trending movies and tv shows
  const fetchTrending = async () => {
    try {
      const response = await axios.get('/trending/all/week');
      dispatch(setBannerData(response.data));

      // console.log('Response', response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  // fetch configuration from the TMDB
  const fetchConfiguration = async () => {
    try {
      const res = await axios.get('/configuration');

      dispatch(setImageURL(res.data.images.secure_base_url + 'original'))
      // console.log('Configuration data', res.data.images.secure_base_url + 'original')
    } catch (error) {
      console.log('Error', error)
    }
  }


  useEffect(() => {
    fetchTrending()
    fetchConfiguration()
  })

  return (
      <main className='pb-14 lg:pb-0'>
        <Header />
          <div className='pt-16'>
            <Outlet/>
          </div>
        <Footer />
        <MobileNavigation />
      </main>
  );
}

export default App;
