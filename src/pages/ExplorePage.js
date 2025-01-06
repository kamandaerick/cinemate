import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ExplorePage = () => {
  const params = useParams()
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`)
      console.log('Data', response)
     
    } catch (error) {
      console.log('Error', error)
    }
  }


  useEffect(() => {
    fetchData()
  },)
  return (
    <div>
     
    </div>
  )
}

export default ExplorePage;
