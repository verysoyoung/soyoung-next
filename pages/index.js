import React, { useEffect } from 'react'
import titlestyles from '../public/css/common/title.module.css'
import homestyles from '../public/css/Home.module.css'
import axios from 'axios'
export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  useEffect(() => {
    axios.get(`${apiUrl}/api/now`).then(res => {
      let data = res.data
      document.getElementById('timeZone').innerHTML =
        '<h1>현재시간: ' + data.now + '<h1>'
    })
  }, [])
  return (
    <>
      <div>
        <h2 className={titlestyles.title}>Home</h2>
      </div>
      <div className={homestyles.home} id="timeZone"></div>
    </>
  )
}
