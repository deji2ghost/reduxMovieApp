import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchDetails } from '../store/details'

export const MovieDetails = () => {
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const details = useSelector(state => state.det.users)
    const dispatch = useDispatch()
    console.log(details)
    console.log(loading ? 'Loading...' : details?.genres[0]?.name)
    useEffect(() => {
        dispatch(fetchDetails(id))
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [id])
  return (
    <div>
        <div className='relative mx-auto'>
            <Link 
            to='/'
            className='bg-gray-600 absolute top-4 left-4 rounded-md py-1 w-[20%] text-center z-10 hover:bg-white hover:text-black'
            >Back</Link>
            <img className='w-full h-[500px]' src={`https://image.tmdb.org/t/p/w500/${details?.backdrop_path}`}/>
            <img className='w-[300px] absolute top-1/2 -translate-y-1/2 left-5' src={`https://image.tmdb.org/t/p/w500/${details?.poster_path}`}/>
        </div>

        <div className='w-4/5 mx-auto mt-4'>
            <h1 className='text-3xl text-center font-bold'>{details?.title}({details?.release_date})</h1>
            <div className='flex'>
                <h1 className='font-bold'>Genre: </h1>
                <h1>{loading ? 'Loading...' : details?.genres[0]?.name}</h1>
                <h1>{loading ? 'Loading...' : details?.genres[1]?.name}</h1>
                <h1>{loading ? 'Loading...' : details?.genres[2]?.name}</h1>
            </div>
            
            <div className='my-3'>
                <p>Popularity: {details?.popularity}</p>
                <p>Vote Average: {details?.vote_count}</p>
                <p>Vote Count: {details?.vote_count}</p>
            </div>

            <i>{details?.tagline}</i>
            
            <div className='my-2'>
            <h3 className='font-bold'>OVERVIEW</h3>
            <p>{details?.overview}</p>
            </div>
        </div>
    </div>
  )
}
