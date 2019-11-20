import { useState, useEffect, useRef } from 'react'

export default (dataSource) => {
  const scrollerRef = useRef()
  const [cursor, setCursor] = useState({count: -1, offset: -4, limit: 4})
  const [isAtBottom, setIsAtBottom] = useState(true)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingFailed, setLoadingFailed] = useState(false)
  const [loadingError, setLoadingError] = useState(null)

  useEffect(() => {
    const loadMore = async () => {
      setLoadingFailed(false)
      setIsLoading(true)
      setLoadingProgress(1)

      try {
        const { data: items, meta } = await dataSource({offset: cursor.offset + cursor.limit, limit: cursor.limit})
        setItems(oldItems => oldItems.concat(items))
        setCursor(meta)
        setIsLoading(false)
        setLoadingProgress(0)
      } catch (err) {
        setLoadingFailed(true)
        setIsLoading(false)
        setLoadingProgress(0)
        setLoadingError(err)
      }
    }

    if (isAtBottom) {
      loadMore()
      setIsAtBottom(false)
    }
  }, [isAtBottom, dataSource])

  const handleScroll = () => {
    const scroller = scrollerRef.current
    if (scroller.scrollHeight - scroller.scrollTop === scroller.clientHeight) {
      setIsAtBottom(true)
    }
  }

  const setScroller = element => {
    scrollerRef.current = element
  }

  return {
    items,
    isLoading,
    loadingProgress,
    loadingFailed,
    loadingError,
    handleScroll,
    setScroller
  }
}
