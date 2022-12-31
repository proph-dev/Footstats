import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useTopScorersL1 = () => {

  const [topScorers, setTopScorers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchTopScorersL1 = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/players/topscorers', {
          params: {
            league: '61',
            season: '2022'
          },
          headers: {
            'X-RapidAPI-Key': '08c0554fa3msh52161d019b3ee8dp1ab3a3jsn08feb1e81ad2',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        })
        setTopScorers(response.data.response);
        setIsLoading(false);
      } catch (e) {
        setHasError(true);
        setIsLoading(false);
      }
    }
    fetchTopScorersL1();
  }, []);


  return (
    topScorers,
    isLoading,
    hasError
  )
}