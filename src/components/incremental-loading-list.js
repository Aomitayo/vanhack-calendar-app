import React from 'react'

export default ({ items, renderItem }) => {
  console.log(items)
  /*
  const listItems = items.map(item =>
    <div key={item.id} >
      {item.name}
    </div>
  )
  */
  return (
    <div>
      This is a list of items aiiight
    </div>
  )
}
