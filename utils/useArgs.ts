import {useCallback, useState} from "react";

export function useArgs(defaultArgs = {}) {
  const [args, setArgs] = useState(defaultArgs)

  const onChange = useCallback((name: string, value: unknown) => {
    setArgs(old => ({
      ...old,
      [name]: value
    }))
  }, [])

  return [args, onChange]
}