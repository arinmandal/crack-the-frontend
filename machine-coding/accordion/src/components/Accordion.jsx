import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const Accordion = ({ items }) => {

  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }


  return (
    <div className='accordion'>
      {items.map((item, index) => {
        return <div key={index} className='accordion-item'>
          <button className='accordion-title'
            onClick={() => handleToggle(index)}
          >{item.title}
            {openIndex === index ? <IoIosArrowUp className='right' /> : <IoIosArrowDown className='right'/>}
          </button>
          {openIndex === index && <div className='accordion-content'>
            {item.content}
          </div>}

        </div>
      })}
    </div>
  )
}

export default Accordion