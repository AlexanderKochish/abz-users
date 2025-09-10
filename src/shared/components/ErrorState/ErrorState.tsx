import React from 'react'
import s from './ErrorState.module.css'
import Button from '../ui/Button/Button'

type Props = {
  title?: string
  initialError?: Error | null
}
const ErrorState = ({ initialError, title }: Props) => {
  return (
    <div className={s.errorContainer}>
      <div className={s.errorIcon}>⚠️</div>
      <h3 className={s.errorTitle}>{title}</h3>
      <p className={s.errorMessage}>
        {initialError?.name}: {initialError?.message}
      </p>
      <Button onClick={() => window.location.reload()}>Refresh page</Button>
    </div>
  )
}

export default ErrorState
