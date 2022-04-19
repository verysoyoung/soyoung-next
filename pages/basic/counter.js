import React, { useState } from 'react'
import styles from '../../public/scss/common/table.module.scss'

export default function Counter() {
  //component = 객체 = 아톰
  const [count, setCount] = useState(0) //getter, setter
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <h2>카운터</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button style={{ width: 100 }} onClick={() => setCount(count + 1)}>
              +
            </button>
            <button style={{ width: 100 }} onClick={() => setCount(count - 1)}>
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <h3>결과: {count}</h3>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
