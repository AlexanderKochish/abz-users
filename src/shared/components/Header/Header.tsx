import React from 'react'
import Button from '../ui/Button/Button'
import s from './Header.module.css'
import Image from 'next/image'
import logo from '../../../../public/logo.svg'

const Header = () => {
  return (
    <header className={s.header}>
      <Image src={logo} width={104} height={26} alt="logo" />
      <div className={s.buttonsGroup}>
        <Button as="a" href="#users">
          Users
        </Button>
        <Button as="a" href="#form">
          Sign Up
        </Button>
      </div>
    </header>
  )
}

export default Header
