import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {
  return (
    <div className='mt-5 bg-black flex flex-col gap-5 text-slate-100 p-3 justify-center items-center font-mono font-medium'>
        <div className='flex gap-6'>
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faYoutube}/>
        </div>
        <div className='flex flex-wrap gap-4 justify-center items-center md:gap-8'>
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <h2 className='flex items-center gap-3 justify-center'><FontAwesomeIcon icon={faCopyright} /> <span>2023 MovieBox by Ayodeji Williams</span></h2>
    </div>
  )
}
