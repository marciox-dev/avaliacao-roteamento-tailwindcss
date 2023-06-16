import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary rounded-b-lg '>
        <h1 className='flex items-center justify-center pt-5 py-6'>A website developed for you. {" "}</h1>
        <span className='flex items-center justify-center px-6 pb-5' role="img" aria-label="Robot Emoji">
          {"\u{1F916}"}
        </span>
    </div>
  )
}

export default Footer