import React from 'react'

import Navbar from '../components/components-structure/Reusable components/NavBar'

const POS = () => {
    const value = JSON.parse(localStorage.getItem("test"));
    console.log(value)
  return (
    < >
      <Navbar />
    </>
  )
}

export default POS
