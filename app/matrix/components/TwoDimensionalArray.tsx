import { FC, useCallback } from "react";
import { Cell } from "./Cell";
import { ColorCell } from "./ColorCell";
import { quickArray } from "@/utils/utilFunctions";

type TwoDimensionalArrayProps = {
  matrix: (string | number)[][],
  updateMatrix: (row: number, col: number, val: string) => void
}

export const TwoDimensionalArray: FC<TwoDimensionalArrayProps> = ({ matrix, updateMatrix }) => {
  const update = useCallback((row: number, col: number, val: string) => {
    updateMatrix(row, col, val)
  }, [updateMatrix])
  return (
    <div className="flex flex-col justify-start items-center">
      {/* col header */}
      <div className="flex">
        <div className="mx-2"><Cell val="" /></div>
        {quickArray((matrix[0] || []).length).map((idx) => (<Cell val={idx + ''} key={`header-${idx}`} />))}
      </div>

      {/* content */}
      {matrix.map((row, rowIndex) => (
        <div className="flex" key={`row-${rowIndex}`}>
          {/* row header */}
          <div className="mx-2"><Cell val={rowIndex + ''} /></div>
          {
            row.map(
              (cell, colIndex) => <ColorCell key={`col-${colIndex}`} val={cell + ''} onChangeCellVal={(newVal) => update(rowIndex, colIndex, newVal)} render={Cell} />
            )
          }
        </div>
      ))}
    </div>
  )
}