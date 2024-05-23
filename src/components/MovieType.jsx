import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieType } from '../store/typeStore'
import { Link, useParams } from 'react-router-dom'

export const MovieType = () => {
    const { type } = useParams()
    const movie = useSelector(state => state.type.users)
    const dispatch = useDispatch()
    console.log(movie)
    useEffect(() => {
        console.log(dispatch(fetchMovieType(type)))
    }, [type])
  return (
    <div>
        <h1 className='font-semibold text-2xl uppercase'>{type}</h1>
        <div className='grid grid-cols-2 justify-center items-center gap-4 md:grid-cols-4'>
            {
                movie.map(mov => {
                    return(
                        <Link to={`movie/${mov.id}`} key={mov.id} className='cursor-pointer'>
                            <img 
                                src={`https://image.tmdb.org/t/p/original${mov?.poster_path}`}
                                className='w-full h-[250px]'
                            />
                            <div className='bg-zinc-800 p-3 h-[130px]'>
                                <h1 className='text-wrap'>Title: {mov?.title}</h1>
                                <p>{mov?.popularity}</p>
                                <p>{mov?.release_date}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}
