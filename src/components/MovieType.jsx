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
    <div className='px-2'>
        <h1 className='font-semibold text-2xl uppercase'>{type}</h1>
        <div className='grid grid-cols-2 justify-center items-center gap-4 md:grid-cols-4 h-[4300px] md:h-[2200px]'>
            {
                movie.map(mov => {
                    return(
                        <Link to={`/movie/${mov.id}`} key={mov.id} className='cursor-pointer text-slate-100'>
                            <img 
                                src={`https://image.tmdb.org/t/p/original${mov?.poster_path}`}
                                className='w-full h-[250px]'
                            />
                            <div className='bg-zinc-800 p-2 h-[150px] flex flex-col gap-2 font-serif'>
                                <h1 className='text-wrap'><b>Title:</b> {mov?.title}</h1>
                                <p><b>Popularity:</b> {mov?.popularity}</p>
                                <p><b>Release Date:</b> {mov?.release_date}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}
