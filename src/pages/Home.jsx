import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieList } from '../store/movieStore'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Movielist } from '../components/Movielist';

export const Home = () => {
    const sliderRef = useRef(null);
    const HomeSlider = useSelector(state => state.user.users)
    console.log(HomeSlider)
    const dispatch = useDispatch()

    const next = () => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
    };
    
    const previous = () => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
    };
    // console.log(dispatch(fetchMovieList()))
    useEffect(() => {
        console.log(dispatch(fetchMovieList()))
    }, [])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <div className='overflow-x-hidden px-2'>
        <div className='relative'>
            <Slider ref={sliderRef} {...settings}>
                {
                    HomeSlider.map(slide => {
                        return(
                            <div key={slide.id}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/original/${slide?.poster_path}`} 
                                    className='h-[500px] w-full object-fit'
                                />
                            </div>
                        )
                    })
                }
            </Slider>
            <FontAwesomeIcon 
                icon={faChevronLeft} 
                onClick={previous}
                className='bg-red-800 text-black absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer hover:bg-zinc-700 hover:text-red-800 font-semibold transition ease-in-out duration-300 p-3 text-2xl'
            />
            <FontAwesomeIcon 
                icon={faChevronRight} 
                onClick={next}
                className='bg-red-800 text-black absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer hover:bg-zinc-700 hover:text-red-800 font-semibold transition ease-in-out duration-300 p-3 text-2xl'
            />
        </div>
        <Movielist homeSlider={HomeSlider}/>
    </div>
  )
}
