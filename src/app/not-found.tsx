import Link from 'next/link'
import '@/shared/styles/globals.css'
import s from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.illustration}>
          <div className={s.planet}></div>
          <div className={s.astronaut}></div>
          <div className={s.stars}>
            {[...Array(20)].map((_, i) => (
              <div key={i} className={s.star}></div>
            ))}
          </div>
        </div>

        <div className={s.textContent}>
          <h1 className={s.title}>404</h1>
          <h2 className={s.subtitle}>Not Found Page</h2>
          <p className={s.description}>
            This page may have moved or no longer exist. Let&apos;s get you back
            into safe orbit!
          </p>

          <div className={s.actions}>
            <Link href="/" className={s.primaryButton}>
              🚀 Return to home page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
