import React, { useEffect } from 'react'
import titlestyles from '../public/css/common/title.module.css'
import axios from 'axios'
export default function Home() {
  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/now').then(res => {
  //     let data = res.data
  //     document.getElementById('timeZone').innerHTML =
  //       '<h1>현재시간: ' + data.now + '<h1>'
  //   })
  // }, [])
  return (
    <>
      <div>
        <h2 className={titlestyles.title}>Home</h2>
      </div>
      <div id="timeZone"></div>
    </>
  )
}
