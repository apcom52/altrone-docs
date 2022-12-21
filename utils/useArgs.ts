import {useCallback, useState} from "react";

export function useArgs<T extends object = {}>(defaultArgs: T): [T, (name: keyof T, value: unknown) => void] {
  const [args, setArgs] = useState<T>(defaultArgs)

  const onChange = useCallback((name: keyof T, value: unknown) => {
    setArgs(old => ({
      ...old,
      [name]: value
    }))
  }, [])

  return [args, onChange]
}