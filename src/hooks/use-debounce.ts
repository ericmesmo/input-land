import { useEffect, useState } from 'react'

export function useDebounce<T>(
  value: T,
  delay?: number,
  callback?: (value: T) => void,
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
      callback?.(value)
    }, delay ?? 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay, callback])

  return debouncedValue
}
