import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

export const Movielist = ({ homeSlider }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    })

  return (
    <div className='overflow-hidden'>
        <h1 className='font-semibold text-2xl'>MOVIELIST</h1>
        <div className='grid grid-cols-2 justify-center items-center gap-4 md:grid-cols-4'>
            {
                homeSlider.map(mov => {
                    return(
                        <div>
                            { isLoading ?
                                <div className='cards'>
                                    <SkeletonTheme color="#202020" highlightColor="#444">
                                        <Skeleton height={300} duration={2}></Skeleton>
                                    </SkeletonTheme>
                                </div>
                                    :
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
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
