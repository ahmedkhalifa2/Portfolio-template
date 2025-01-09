import React from 'react'
import { Heading } from '../common/Heading'
import { services } from '../data/dummydata'

export const Services = () => {
  return (
    <>
      <div className='services'>
        <div className='container'>
          <Heading title='Services' />
          <div className='grid3'>
            {services.map((val, i) => (
              <div className='box' data-aos="flip-left">
                <i>{val.icon}</i>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
