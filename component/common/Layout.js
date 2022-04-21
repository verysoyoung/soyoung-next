import Nav from './Nav'
import Footer from './Footer'
import styles from '../../public/css/Layout.module.css'
import { useRouter } from 'next/router'
export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
