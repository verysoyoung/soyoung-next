import Nav from './Nav'
import Footer from './Footer'
import styles from '../../public/scss/Layout.module.scss'
export default function Layout({ children }) {
  return (
    <div className={styles}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
