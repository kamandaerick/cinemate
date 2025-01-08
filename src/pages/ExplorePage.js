import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  // const [totalPageNos, setTotalPageNos] = useState(1);

  // Reset data when params.explore changes
  useEffect(() => {
    setData([]);
  }, [params.explore]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/discover/${params.explore}`, { params: { page: pageNo } });
        console.log('Data', response);

        setData(prev => [...prev, ...response.data.results]); // Append new data
        // setTotalPageNos(response.data.total_pages);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchData();
  }, [params.explore, pageNo]);

  // Handle scroll (infinite scroll)
  useEffect(() => {
    const handleInfinitescroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setPageNo(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleInfinitescroll);
    return () => {
      window.removeEventListener('scroll', handleInfinitescroll);
    };
    
  }, []);

  
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold capitalize my-3">Explore {params.explore}</h2>
        <Link className='flex flex-wrap gap-1'>
          {data.map((exploreData, index) => (
            <Card data={exploreData} key={`${exploreData.id}-${params.explore}-${index}`} />
          ))}
        </Link>
      </div>
    </div>
  );
};

export default ExplorePage;
