'use client'

import { ChangeEvent, FC, useCallback, useEffect, useState } from "react"

const Tree: FC = () => {
  const [list, setList] = useState<(number | string)[]>([])
  const [nodeList, setNodeList] = useState<(number| string)[][]>([])
    const inputHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
      const {currentTarget: {value}} = event
      setList(value.replace('[', '').replace(']', '').replace(/,$/, '').split(',').map(i=> isNaN(parseInt(i.trim())) ? 'n': parseInt(i.trim()) ))
    }, [])

    useEffect(() => {
      let toGoList = [0]
      const newList = []
      while(toGoList.length !== 0) {
        newList.push(toGoList.map(i => list[i]))
        toGoList = toGoList.reduce((acc: number[], cur: number) => {
          const leftChildIndex = 2*cur+1
          const rightChildIndex = 2*cur+2

          leftChildIndex <= list.length -1 && acc.push(leftChildIndex)
          rightChildIndex <= list.length -1 && acc.push(rightChildIndex)
          return acc
        }, [])
      const beforeLast = newList[newList.length - 2] || []
      const last = newList[newList.length - 1] || []
      const missing = Array.from({length: beforeLast.length * 2 - last.length}).map(_i => 'n')
      missing.forEach(i=>last.push(i))
      setNodeList(newList)
      }
    }, [list])

    return (
        <div className="w-screen h-screen flex flex-col justify-start items-center bg-slate-200">
          <div className="text-black">{JSON.stringify(list)}</div>
          <div className="text-black">{JSON.stringify(nodeList)}</div>
          <div>
            <textarea className="text-black" name="list" id="" cols={50} rows={6} onChange={inputHandler}></textarea>
          </div>
          <div>
            {
              nodeList.map(
                (list, index) => <div className="flex justify-evenly items-center min-w-[50rem] py-2" key={index}>{
                  list.map((e, eIndex) => <span className="border border-solid border-black text-black w-8 h-8 flex justify-center items-center rounded-full" key={`${index}-${e}-${eIndex}`}>{e}</span>)
                }</div>
              )
            }
          </div>
        </div>
    )
}
export default Tree