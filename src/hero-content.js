import React from 'react'

export default () => {
  const items = [1,2,3,4]
  return (
    <div className='p-3'>
      {items.map(number =>
        <div key={number.toString()} className={number !== 1? 'hidden' : ''}>
          <img className='' src='https://i.pravatar.cc/300' alt='' />
          <div>
            <div>Interview Practice</div>
            <div> November 20, 2019 4PM (PST)</div>
            <div><i className="fas fa-map-marker-alt"></i> Zoom</div>
          </div>

        </div>
      )}
    </div>
  )
}
