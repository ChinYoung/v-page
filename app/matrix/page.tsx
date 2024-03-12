'use client'
import { FC, useCallback, useState } from "react";
import { TwoDimensionalArray } from "./components/TwoDimensionalArray";
import { useStatefulInput } from "@/hooks/useStatefulInput";

function createTwoDimensionalArray(rowCount: number, colCount: number) {
  return Array.from({ length: rowCount }).map(_ => Array.from({ length: colCount }).map(_ => '0'))
}

const Matrix: FC = () => {
  const { TheContent: rowCount, TheHandler: rowCountChangeHandler } = useStatefulInput('4')
  const { TheContent: colCount, TheHandler: colCountChangeHandler } = useStatefulInput('4')
  const [matrix, setMatrix] = useState<string[][]>(createTwoDimensionalArray(parseInt(rowCount), parseInt(colCount)))

  const updateMatrix = useCallback((row: number, col: number, newVal: string) => {
    const newMatrix = [...matrix]
    newMatrix[row][col] = newVal
    setMatrix(newMatrix)
  }, [matrix])

  const regenerate = useCallback(() => {
    if (matrix.length === parseInt(rowCount) && matrix[0].length === parseInt(colCount)) {
      return
    }
    const rowCountNum = parseInt(rowCount)
    const colCountNum = parseInt(colCount)
    const newMatrix = createTwoDimensionalArray(rowCountNum, colCountNum)
    matrix.forEach((row, rowIndex) => {
      row.forEach((cellVal, colIndex) => {
        if (!(rowIndex <= rowCountNum - 1 && colIndex <= colCountNum - 1)) {
          return
        }
        newMatrix[rowIndex][colIndex] = cellVal
      })
    })
    setMatrix(newMatrix)
  }, [colCount, matrix, rowCount])

  return (
    <main className="p-12 min-w-screen min-h-screen flex flex-col justify-start items-center gap-4">
      <div className="flex flex-col justify-start items-start gap-2">
        {/* row input */}
        <div className="flex gap-2 text-black">
          <span className="w-16">row</span>
          <span>
            <input
              className="border p-1 rounded"
              name="row"
              defaultValue={4}
              onChange={rowCountChangeHandler}
            ></input>
          </span>
        </div>
        {/* col input */}
        <div className="flex gap-2 text-black">
          <span className="w-16">col</span>
          <span>
            <input
              className="border p-1 rounded"
              name="row"
              defaultValue={4}
              onChange={colCountChangeHandler}
            ></input>
          </span>
        </div>
      </div>
      <div>
        <button
          onClick={regenerate}
          className="px-4 py-2 bg-blue-400 text-white border-blue-400 border rounded-lg"
        >
          regenerate
        </button>
      </div>
      <TwoDimensionalArray matrix={matrix} updateMatrix={updateMatrix} />
    </main>
  )
}

export default Matrix