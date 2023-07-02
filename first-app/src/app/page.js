import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
      <h1 className={styles.textCenter}>FirstApp</h1>
        <Image
        src="/next.svg"
        width="100"
        height="100"
        alt="Image in nextjs"
        />
        <Link href="https://nextjs.org/learn/foundations/about-nextjs" target='_blank' className={styles.buttonNext}>Why NextJs?</Link>
      </div>
    </main>
  )
}
