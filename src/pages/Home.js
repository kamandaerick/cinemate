import React, {useEffect, useState} from 'react'
import HomeBanner from '../components/HomeBanner';
import { useSelector } from 'react-redux';
// import Card from '../components/Card';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import axios from 'axios';

const Home = () => {
  const allTrending = useSelector((state) => state.cinemateData.bannerData.results);
  const [topRatedSeries, setTopRatedSeries] = useState([]);

  const fetchTopRatedSeries = async () => {
    try {
      const res = await axios.get('/tv/top_rated');
      setTopRatedSeries(res.data.results)
      console.log("Top Rated Series: ", res)
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  useEffect(() => {
    fetchTopRatedSeries()
  }, [])
  
  // console.log("All Trending", allTrending)
  if (!allTrending) return <div>Loading...</div>;
  return (
    <div>
      <HomeBanner />
      <HorizontalScrollCard data={allTrending} heading={'Trending Now'} trending={true} />
      <HorizontalScrollCard data={topRatedSeries} heading={'Top Rated Tv Series'} trending={false}/>
    </div>
  )
};

export default Home;

