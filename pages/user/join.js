import React, { useState } from 'react'
import tableStyles from '../../public/css/common/table.module.css'
import titleStyles from '../../public/css/common/title.module.css'
// import { useDispatch } from 'react-redux'
// import { userActions } from '../../redux/'

export default function Join() {
  // const dispatch = useDispatch()
  const [user, setUser] = useState({
    userid: '',
    password: '',
    email: '',
    name: '',
    phone: '',
    birth: '',
    address: '',
  })
  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  return (
    <>
      <h2 className={titleStyles.title}>회원가입</h2>

      <form
        onSubmit={e => {
          // e.preventDefault()
          // alert(' 진행 1: 회원가입 클릭 ')
          // dispatch(userActions.joinRequest(user))
          // setUser({
          //   userid: '',
          //   password: '',
          //   email: '',
          //   name: '',
          //   phone: '',
          //   birth: '',
          //   address: '',
          // })
        }}
      >
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <td>
                <span>사용자ID</span>
              </td>
              <td>
                <input type="text" name="userid" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <span>비밀번호</span>
              </td>
              <td>
                <input type="text" name="password" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td htmlFor="">
                <span>이메일</span>
              </td>
              <td>
                <input type="text" name="email" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td htmlFor="">
                <span>이름</span>
              </td>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td>
                <span>전화번호</span>
              </td>
              <td>
                <input type="text" name="phone" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td>
                <span>생년월일</span>
              </td>
              <td>
                <input type="text" name="birth" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <span>주소</span>
              </td>
              <td>
                <input type="text" name="address" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit">회원가입</button>
                <br />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  )
}
