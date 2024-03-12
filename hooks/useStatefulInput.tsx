import { ChangeEvent, useCallback, useState } from "react"

export const useStatefulInput = (defaultValue?: string) => {
  const [TheContent, setContent] = useState<string>(defaultValue ?? '')
  const TheHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const curValue = e.target.value
    setContent(curValue)
  }, [])
  return {
    TheContent,
    TheHandler,
  }
}