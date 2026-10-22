import React from 'react'
import styles from './MovieCard.module.css'
import {FaCirclePlay} from 'react-icons/fa6'
import {BsPlusCircle} from 'react-icons/bs'
import { GoCheckCircleFill } from 'react-icons/go'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { movies } from '../../Data/Data.js'

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500/"

export function SingleMovieCard({movie}) {
    if (!movie) return null
    const genres = movie.genres ?? []
  return (
    <div className={styles.cardWrapper}>
      {/* poster image*/}
      <img  className={styles.poster} src={IMAGE_BASE + movie.poster_path} alt={`${movie.title} poster`}/>
      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* image */}
        <img  className={styles.poster} src={IMAGE_BASE + movie.poster_path} alt={`${movie.title} poster`}/>
        {/* badge */}
        {movie.badge && <div className={styles.badge}> {movie.badge} </div>}
        {/* button row */}
        <div className={styles.buttonsRow}>
            <FaCirclePlay color='white' size={40}/>
            <BsPlusCircle  color='white' size={40}/>
            <GoCheckCircleFill color='white' size={40}/>
            <IoIosArrowDropdownCircle className={styles.circleButtonSmall} color='white' size={40}/>
        </div>
        {/* metadata */}
        <div className={styles.metaRow}>
            <span className={styles.tag}>{movie.matureRating}</span>
            <span className={styles.tag}>{movie.category}</span>
            <span className={styles.tag}>{movie.quality}</span>
        </div>
        {/* genres */}
      <div className={styles.genres}>

        {genres.map((g, index) => (
  <span key={index}>
    {g}
    {index < genres.length - 1 && <span className={styles.dot}> • </span>}
  </span>
))}
        </div>
      </div>
    </div>
  )
}

function MovieCard() {
  return (
    <div className='moviesRow'>
      <div className={styles.featured}>
        <div className={styles.cardsRow}>
          {movies.map((movie) => (
            <SingleMovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieCard;
