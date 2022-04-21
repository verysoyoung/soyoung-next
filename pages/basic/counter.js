import React, { useState } from 'react'
import styles from '../../public/css/Counter.module.css'
import titleStyles from '../../public/css/common/title.module.css'
export default function Counter() {
  //component = 객체 = 아톰
  const [count, setCount] = useState(0) //getter, setter
  return (
    <div className={styles.counter}>
      <div>
        <h2 className={titleStyles.title}>Counter</h2>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div>
        <h3>결과: {count}</h3>
      </div>
    </div>
  )
}
