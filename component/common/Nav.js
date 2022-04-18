import Link from 'next/link'

const navData = [
  { name: '메인', link: '/' },
  { name: '카운터', link: '/basic/counter' },
  { name: 'BMI', link: '/basic/bmi' },
  { name: '게시글등록', link: '/board/board' },
  { name: '게시글목록', link: '/board/board-list' },
  { name: '회원가입', link: '/user/join' },
  { name: '사용자목록', link: '/user/user-list"' },
]

export default function Nav() {
  return (
    <nav>
      <ul>
        {navData.map((nav, i) => {
          return (
            <li>
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
