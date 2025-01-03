import React, {useEffect, useState} from 'react'
import HomeBanner from '../components/HomeBanner';
import { useSelector } from 'react-redux';
// import Card from '../components/Card';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import axios from 'axios';

const Home = () => {
  const allTrending = useSelector((state) => state.cinemateData.bannerData.results);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  // Fetch Top Rated Tv Series
  const fetchTopRatedSeries = async () => {
    try {
      const res = await axios.get('/tv/top_rated');
      setTopRatedSeries(res.data.results)
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  // Fetch Top Rated Movies
  const fetchTopRatedMovies = async () => {
    try {
      const res = await axios.get('/trending/movie/week');
      setTopRatedMovies(res.data.results)
      // console.log("Top Movies: ", res)
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  // fetch Most popular Tv Series 
  const fetchPopularSeries = async () => {
    try {
      const res = await axios.get('/tv/popular');
      setPopularSeries(res.data.results)
      // console.log("Popular Series: ", res)
    } catch (error) {
      console.log("Error: ", error)
    }
  }
  useEffect(() => {
    fetchTopRatedSeries()
    fetchTopRatedMovies()
    fetchPopularSeries()
  }, [])
  
  
  if (!allTrending) return <div>Loading...</div>;
  return (
    <div>
      <HomeBanner />
      <HorizontalScrollCard data={allTrending} heading={'Trending Now'} trending={true} />
      <HorizontalScrollCard data={topRatedSeries} heading={'Top Rated Tv Series'} trending={false}/>
      <HorizontalScrollCard data={topRatedMovies} heading={'Trending Movies'} trending={true}/>
      <HorizontalScrollCard data={popularSeries} heading={'Popular Tv Series'} trending={false}/>
    </div>
  )
};

export default Home;

