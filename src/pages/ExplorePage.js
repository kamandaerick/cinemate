import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ExplorePage = () => {
  const params = useParams()
  const [pageNo, setPageNo] = useState(1)
  const [data, setData] = useState([])
  const [totalPageNos, setTotalPageNos] = useState(1)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/discover/${params.explore}`, {params: {page: pageNo}});
        console.log('Data', response);
        
        setData(prev => {
          return [...prev, ...response.data.results]
        })

        setTotalPageNos(response.data.total_pages)
      } catch (error) {
        console.log('Error', error);
      }
    };


    fetchData();
  }, [params.explore, pageNo]);

      // Handle scroll (infinite scroll)
  const handleInfinitescroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo(prev => prev += 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleInfinitescroll)
  }, [])
  return (
    <div>
     <h2 className='text-2xl font-semibold capitalize'>Explore {params.explore}</h2>
    </div>
  )
}

export default ExplorePage;
