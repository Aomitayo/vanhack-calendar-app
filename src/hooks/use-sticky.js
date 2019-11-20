import { useState, useRef } from 'react'

export default () => {
  const scrollerRef = useRef()
  const stickyRef = useRef()

  const [top, setTop] = useState(NaN)
  const [stuckToTop, setStuckToTop] = useState(false)

  const handleScroll = () => {
    let clientRect = stickyRef.current.getBoundingClientRect()
    setTop(clientRect.top)
    setStuckToTop(clientRect.top <= 0)
  }

  const setScroller = element => {
    scrollerRef.current = element
  }
  return {
    top,
    stuckToTop,
    handleScroll,
    stickyRef,
    setScroller
  }
}
