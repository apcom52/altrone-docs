import {useCallback, useState} from "react";

export function useArgs<T extends object>(defaultArgs: T): [T, (name: string, value: unknown) => void] {
  const [args, setArgs] = useState<T>(defaultArgs)

  const onChange = useCallback((name: string, value: unknown) => {
    setArgs(old => ({
      ...old,
      [name]: value
    }))
  }, [])

  return [args, onChange]
}