import React from 'react'
import HomeBanner from '../components/HomeBanner';
import { useSelector } from 'react-redux';
// import Card from '../components/Card';
import HorizontalScrollCard from '../components/HorizontalScrollCard';

const Home = () => {
  const allTrending = useSelector((state) => state.cinemateData.bannerData.results)
  
  console.log("All Trending", allTrending)
  if (!allTrending) return <div>Loading...</div>;
  return (
    <div>
      <HomeBanner />
      
      <HorizontalScrollCard data={allTrending} heading={'Trending Now'} />
    </div>
  )
};

export default Home;

