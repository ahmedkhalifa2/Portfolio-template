import { useState } from 'react'
import { portfolio } from '../data/dummydata'
import { Visibility } from '@mui/icons-material'
import { Heading } from '../common/Heading'

const allCategory = ["all",...new Set(portfolio.map((item)=>item.category))]
export const Portfolio = () => {

  const [list,setlist] = useState(portfolio)
  const [category,setCategory] = useState(allCategory)

  const filterItems = (category) =>{
    
    const newItems = portfolio.filter((item)=>item.category ==category)
    setlist(newItems)
    
    if(category === "all")
      setlist(portfolio)
  } 
  
  return (
    <>
        <article>
          <div className='container'>
              <Heading title='Portfolio'/> 
              <div className='categoryButton'>
                {category.map((item)=>(
                  <button className='primaryBtn' onClick={()=>filterItems(item)} data-aos="zoom-out-down">
                      {item}
                  </button>
                ))}
              </div>
          <div className='content grid3'>
              {list.map((items,i)=>(
                <div key={i} className='box' data-aos="fade-up">
                    <div className='img'>
                      <img src={items.cover}/>
                    </div>
                    <div className='overlay'>
                      <h3>{items.title}</h3>
                      <span>{items.name}</span>
                      <Visibility/>
                    </div>
                </div>

              ))}
          </div>
          </div>
        </article>
    </>
  )
}
