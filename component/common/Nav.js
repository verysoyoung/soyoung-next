import Link from 'next/link'
import styles from '../../public/css/Layout.module.css'
const navData = [
  { name: 'Main', link: '/' },
  { name: 'Counter', link: '/basic/counter' },
  { name: 'BMI', link: '/basic/bmi' },
  // { name: '게시글등록', link: '/board/board' },
  // { name: '게시글목록', link: '/board/board-list' },
  { name: 'Join', link: '/user/join' },
  // { name: '사용자목록', link: '/user/user-list' },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {navData.map((nav, i) => {
          return (
            <li key={i}>
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
