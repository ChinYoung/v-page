'use client'
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";

const Matrix: FC = () => {
  const [matrix, setMatrix] = useState<number[][]>([])
  const rowCount = matrix.length
  const colCount = (matrix[0] || []).length
  const inputHandler = useCallback((e: ChangeEvent) => {
    const { value } = e.currentTarget as HTMLTextAreaElement
    console.log(value)
    if (!value) {
      return
    }
    try {
      const inputMatrix = JSON.parse(value) as number[][]
      setMatrix(inputMatrix)
    } catch (err) {
      console.error(err)
      setMatrix([])
    }
  }, [])
  useEffect(() => {
    console.log(matrix, '----------')
  }, [matrix])
  return (
    <div className="p-12 min-w-screen min-h-screen flex flex-col justify-start items-center gap-4">
      <div>
        <textarea
          name="matrix"
          id="matrix-input"
          className="text-black"
          cols={100}
          rows={10}
          onChange={inputHandler}
        ></textarea>
      </div>
      <div className="flex flex-col justify-start items-center">
        {/* col mark, header */}
        <div className="flex justify-center items-center">
          <div className="h-12 w-12 flex justify-start items-start"></div>
          {Array.from({ length: colCount }, (v, k) => k).map((idx) => (
            <div className="w-8 h-12 flex justify-center items-start" key={`header-${idx}`}>
              {idx}
            </div>
          ))}
        </div>
        {matrix.map((row, rowIndex) => (
          <div className="flex justify-center items-center" key={`row-${rowIndex}`}>
            {/* row mark, header */}
            <div className="h-8 w-12 flex justify-start items-center">{rowIndex}</div>
            {row.map((cell, cellIndex) =>
              cell === 1 ? (
                <div
                  className="w-8 h-8 border border-blue-600 flex justify-center items-center bg-slate-400"
                  key={`cell-${cellIndex}`}
                >
                  {cell}
                </div>
              ) : (
                <div
                  className="w-8 h-8 border border-blue-600 flex justify-center items-center"
                  key={`cell-${cellIndex}`}
                >
                  {cell}
                </div>
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Matrix