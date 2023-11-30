import React from 'react'
import Search from '../Search/Search'
import Add from '../Add/Add'

const TopNav = () => {
  return (
    <div className='flex justify-between'>
        <Search />
        <Add />
    </div>
  )
}

export default TopNav