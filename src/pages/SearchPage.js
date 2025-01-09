import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../components/Card'



const SearchPage = () => {
  const location = useLocation();
  const urlQuery = location.search;
  const queryValue = urlQuery.split('=')[1]
  const finalQuery = decodeURIComponent(queryValue)
  const [data, setData] = useState([])

  const fetchData = async () => {
    
    try {
      const url = '/search/multi';
      const query = `?query=${finalQuery}`
      const response = await axios.get(url + query);
      setData(response.data.results)
      
    } catch (error) {
      console.log('Error: ', error)
    }
  
  }

  useEffect(() => {
    fetchData()
  })
  return (
    <div className='container mx-auto'>
      <h2 className="text-2xl font-semibold capitalize my-3">Search Results</h2>
      <div>
      <Link className='flex flex-wrap gap-1 items-center justify-center'>
          {data.map((data, index) => (
            <Card data={data} key={`${data.id}-${index}`} />
          ))}
        </Link>
      </div>
    </div>
  )
}

export default SearchPage;
