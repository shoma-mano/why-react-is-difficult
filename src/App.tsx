import { useCount } from './useCount'


function App() {

  const {
    count,
    nextCount,
    addCount
  } = useCount()

  const onClick = ()=>{
    addCount()
    window.alert(`ボタンを押してcountが${count}になりました。もう一度押すと${nextCount}になります。`)
  }

  return (
      <button onClick={onClick}>
          count is {count}
      </button>
  )
}

export default App
