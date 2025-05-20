import React from 'react'
import Accordion from './components/Accordion'

const App = () => {

  const items = [{
    title: 'JavaScript',
    content: 'Best language for web'
  }, {
    title: 'Python',
    content: 'Best for Machine learing and AI'
  },
  {
    title: 'Linux',
    content: 'Savior of a server'
  },
  {
    title: 'Java',
    content: 'Old is gold'
  }
  ]
  return <Accordion items={items} />
}

export default App