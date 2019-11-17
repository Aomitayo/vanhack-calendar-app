import React from 'react'

export default () => {
  const items = [1, 2, 3, 4]
  return (
    <div className='hero-content p-3'>
      {items.map(number =>
        <div key={number.toString()} className={number !== 1 ? 'hidden' : ''}>
          <img className='' src='https://i.pravatar.cc/300' alt='' />
          <div>
            <div>Interview Practice</div>
            <div> November 20, 2019 4PM (PST)</div>
            <div><i className='fas fa-map-marker-alt' />Zoom</div>
          </div>
        </div>
      )}
      <div className='hero-content-controls mt-4 object-right'>
        <i className='fa fa-chevron-left' />
        {items.map(number => <i key={number.toString()} className='fa fa-circle' />)}
        <i className='fa fa-chevron-right' />
      </div>
    </div>
  )
}
