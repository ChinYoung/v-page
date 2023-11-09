'use client'

import { useCallback } from "react"

export default function DemoButton(){
  const requestApi = useCallback(() => {
    fetch('/demo/api')
  }, [])
  return (
    <button onClick={requestApi}>xxxxxxxx</button>
  )
}