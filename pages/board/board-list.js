import React, { useEffect } from 'react'
import titlestyles from '../../public/css/common/table.module.css'
import axios from 'axios'

export default function BoardList() {
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL
  // useEffect(() => {
  //   axios.get(`${apiUrl}/api/board`).then(res => {
  //     console.log(res)
  //   })
  // }, [])
  return (
    <>
      <div className={titlestyles.title}>게시판글 목록</div>
    </>
  )
}
