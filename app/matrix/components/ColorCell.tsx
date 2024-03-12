import { FC, createRef, useCallback, useEffect, useState } from "react";


export const ColorCell: FC<{
  val: string,
  onChangeCellVal: (newVal: string) => void,
  render?: FC<{ val: string }>
}> = ({ val, onChangeCellVal, render: Content }) => {
  const ContentRender = () => (
    Content ? <Content val={val} /> : val
  )

  const inputRef = createRef<HTMLInputElement>()
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const changeCellVal = useCallback(() => {
    onChangeCellVal(inputRef.current?.value || val)
  }, [inputRef, onChangeCellVal, val])

  const edit = useCallback(() => {
    setIsEditing(true)

  }, [])
  const stopEdit = useCallback(() => {
    setIsEditing(false)
  }, [])
  useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])

  useEffect(() => {
    inputRef.current?.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        changeCellVal()
        stopEdit()
      }
    })
  }, [changeCellVal, inputRef, stopEdit])

  return (
    <div
      onClick={edit}
      onBlur={stopEdit}
      className="border border-blue-300 flex justify-center items-center hover:bg-slate-400 hover:cursor-default relative"
    >
      {isEditing ? (
        <div className="absolute top-0 flex flex-col gap-2 justify-start items-center z-20 bg-slate-300">
          <input
            placeholder={val}
            className="border-2 border-solid border-blue-500 w-24 h-12 bg-blue-300 p-2 "
            ref={inputRef}
            onBlur={changeCellVal}
          />
          <div className="w-full flex justify-center items-center gap-1 p-2 pt-0">
            <div className="w-4 h-4 bg-blue-500 hover:border-2 border-black"></div>
            <div className="w-4 h-4 bg-slate-400 hover:border-2 border-black"></div>
            <div className="w-4 h-4 bg-red-500 hover:border-2 border-black"></div>
          </div>
        </div>
      ) : null}
      <ContentRender />
    </div>
  )
}