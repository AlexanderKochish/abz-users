'use client'
import s from './error.module.css'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Something went wrong</h2>
      <p className={s.message}>{error.message}</p>
      <button onClick={reset} className={s.button}>
        Try again
      </button>
    </div>
  )
}
