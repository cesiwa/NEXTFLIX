import React from 'react'
import styles from "./styles.module.css";
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/silamahim/" target="_blank">
        Sıla Mahim
      </Link>
    </footer>
  )
}

export default Footer