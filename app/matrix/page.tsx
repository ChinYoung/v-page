'use client'
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";

const Matrix: FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([])
  const inputHandler = useCallback((e: ChangeEvent) => {
    const { value } = e.currentTarget as HTMLTextAreaElement
    console.log(value);
    if (!value) {
      return
    }
    try {
      const inputMatrix = JSON.parse(value) as number[][]
      setMatrix(inputMatrix)
    } catch (err) {
      console.error(err);
      setMatrix([])
    }
  }, [])
  useEffect(() => {
    console.log(matrix, '----------');
  }, [matrix])
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <textarea name="matrix" id="matrix-input" cols={30} rows={10} onChange={inputHandler}></textarea>
      </div>
      <div>
        {
          matrix.map((row, rowIndex) => (<div key={`row-${rowIndex}`}>{row.map((cell, cellIndex) => <div key={`cell-${cellIndex}`}>{cell}</div>)}</div>))
        }
      </div>
    </div>
  )
}

export default Matrix