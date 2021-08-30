import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
// allCategories 是一个字符串数组
const allCategories = ['all',...new Set(items.map((item) => item.category))]
function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [categories] = useState(allCategories)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return
    }
    // newItems 为过滤后的数组
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
  }
  return(
    <main>
      <section className="menu Section">
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        {/* 传递一个函数属性给子组件 */}
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
