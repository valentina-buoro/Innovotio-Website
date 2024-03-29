import React from 'react'

const Copyright = () => {
  return (
    <section className="mx-auto container overflow-hidden text-white font-light flex md:flex-row-reverse w-full flex-col md:items-start md:justify-between py-0 lg:py-4 pb-10">
    <div className="flex md:text-base text-sm lg:mb-2">
      <p>Terms of Service</p>
      <p className='font-light text-gray ml-5'> | </p>
      <p className='ml-5'>Privacy Policy</p>
    </div>
    <p className="pb-6 md:pb-0 font-light text-sm t md:mt-0 mb-3 mt-4 md:text-base">©Copyright 2023 Innovotio. All Rights Reserved.</p>
  </section>  )
}

export default Copyright