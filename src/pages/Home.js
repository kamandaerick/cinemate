import React from 'react'
import HomeBanner from '../components/HomeBanner';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

const Home = () => {
  const allTrending = useSelector((state) => state.cinemateData.bannerData.results)
  
  console.log("All Trending", allTrending)
  if (!allTrending) return <div>Loading...</div>;
  return (
    <div>
      <HomeBanner />

      <div className='container mx-auto my-10 px-3'>
        <h2 className='text-2xl text-white font-bold mb-2'>Trending Now</h2>
        <div className= "grid gap-3 grid-flow-col">
          {
          allTrending.map((data, index) => {
            return (
              <div>
                <Card
                  key={data.id}
                  data={data}
                  index={index + 1}
                  trending={true}
                />
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
};

export default Home;

