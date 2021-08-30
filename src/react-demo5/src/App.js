import React,{useState,useEffect} from 'react'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'
import {FaQuoteRight} from 'react-icons/fa'
import data from './data'
function App() {
  const [people] = useState(data)
  const [index,setIndex] = useState(0)
  useEffect(()=> {
    const lastIndex = people.length - 1
    //往前翻到头了索引变为数组的最后一项
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  },[index,people])
  useEffect(() => {
    let silder = setInterval(() => {
      setIndex(index + 1) // 每次索引加一
    },5000)
    // componentWillunmount 组件将要卸载时清除计时器
    return () => {
      clearInterval(silder)
    }
  },[index])
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person,personIndex) => {
          // person是people数组里的一个对象
          const {id,image,name,title,quote} = person
          let position = 'nextSlide'
          if(personIndex === index){
            position = 'activeSlide' // 当前的slide
          }
          if(personIndex === index-1 || (index === 0 && personIndex === people.length - 1)){
            position = 'lastSlide'; // 最后一个位置
          }
          return (
            <article className={position} key={id}>
                <img src={image} alt={name} className="person-img"/>
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon'/>
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App