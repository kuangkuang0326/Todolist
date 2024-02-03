import React,{useState,useCallback,useRef,useEffect} from "react"
export default function App () {
    const [ count, setCount ] = useState(0)
    const timer = useRef(null)
    let timer2 
    
    useEffect(() => {
      let id = setInterval(() => {
        setCount(count => count + 1)
      }, 500)
  
      timer.current = id
      timer2 = id
      return () => {
        clearInterval(timer.current)
      }
    }, [])
  
    const onClickRef = useCallback(() => {
      clearInterval(timer.current)
    }, [])
  
    const onClick = useCallback(() => {
      clearInterval(timer2)
    }, [])
  
    return (
      <div>
        点击次数: { count }
        <button onClick={onClick}>普通</button>
        <button onClick={onClickRef}>useRef</button>
      </div>
      )
  }
  