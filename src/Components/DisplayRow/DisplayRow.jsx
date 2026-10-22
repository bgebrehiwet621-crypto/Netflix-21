import React, { useState, useEffect } from 'react'
import styles from './DisplayRow.module.css'
import SlideShow from '../SlideShow/SlideShow'
import { movieInstance } from '../../Utility/MovieInstance'
import requests from '../../Utility/requestUrls'

function DisplayRow() {

    const [movies, setMovies]=useState({
        trending:[],
        netflixOrginals:[],
        topRated:[],
        action:[],
        comedy:[],
        horror:[],
        romance:[],
        documentaries:[]
    })
useEffect(() => {
    fetchMovies()
}, [])

const fetchMovies = async () => {
    try {
        const [trendingResponse, netflixOrginalsResponse, topRatedResponse, actionResponse, comedy, horror, romance, documentaries] = await Promise.all([
        
        movieInstance.get(requests.fetchTrending), 
        movieInstance.get(requests.fetchNetflixOrginals),
        movieInstance.get(requests.fetchTopRated),
        movieInstance.get(requests.fetchAction),
        movieInstance.get(requests.fetchComedy),
        movieInstance.get(requests.fetchHorror),
        movieInstance.get(requests.fetchRomance),
        movieInstance.get(requests.fetchDocumentaries)

        ])
        setMovies({
            trending: trendingResponse.data.results,
            netflixOrginals: netflixOrginalsResponse.data.results,
            topRated: topRatedResponse.data.results,
            action: actionResponse.data.results,
            comedy: comedy.data.results,
            horror: horror.data.results,
            romance: romance.data.results,
            documentaries: documentaries.data.results
        })
    } catch(error){
        console.error("Error fetching movies:", error)
    }
}

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix Suggestions" movies={movies.trending}/>
      <SlideShow title="Popular on Netflix" movies={movies.netflixOrginals} light/>
      <SlideShow title="Action" movies={movies.action} light/>
      <SlideShow title="Top Rated" movies={movies.comedy} light/>
      
    </div>
  )
}

export default DisplayRow