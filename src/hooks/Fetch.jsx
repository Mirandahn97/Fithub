import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        const res = await fetch(url)
        if(!res.ok) {
          throw new Error(`Failed fetch`)
        }
        const data = await res.json()
        setData(data)
        setIsLoading(false)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
          console.error('Fetch failed: ', error)
        }
      }
    }
    fetchData()
  }, [url])

  return { data, isLoading, error }
}