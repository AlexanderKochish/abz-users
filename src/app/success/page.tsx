import Typography from '@/shared/components/ui/Typography/Typography'
import Image from 'next/image'
import React from 'react'
import successImage from '../../../public/success-image.svg'
import s from './page.module.css'
import Link from 'next/link'
import ArrowLeft from '@/shared/components/ui/ArrowLeft/ArrowLeft'

export const dynamic = 'error'

const SuccessPage = () => {
  return (
    <section>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.content}>
            <Typography variant="h1" as="h1">
              User successfully registered
            </Typography>

            <Image
              src={successImage}
              width={328}
              height={290}
              alt="success image"
            />
            <Link href="/" className={s.backButton}>
              <ArrowLeft size={18} />
              <span>Back to home</span>
            </Link>
          </div>
          <hr />
          <footer className={s.successFooter}>
            <small>© abz.agency specially for the test task</small>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default SuccessPage
