'use client'
import React from 'react'
import s from './UserCard.module.css'
import { User } from '../../types/types'
import Image from 'next/image'
import clsx from 'clsx'
import avatarPlaceholder from '../../../../../public/assets/photo-cover.png'
import { PLACEHOLDER_URL } from '@/shared/constants'

type Props = {
  user: User
  onClick?: () => void
}

const UserCard = ({ user, onClick }: Props) => {
  return (
    <div className={s.card} onClick={onClick}>
      <Image
        className={s.avatar}
        src={
          user.photo === (PLACEHOLDER_URL || !user.photo)
            ? avatarPlaceholder
            : user.photo
        }
        width={70}
        height={70}
        alt="avatar"
        loading="lazy"
      />
      <span className={clsx(s.name, s.ellipsis)}>{user.name}</span>
      <span className={s.ellipsis}>{user.email}</span>
      <span className={s.ellipsis}>{user.position}</span>
      <span className={s.ellipsis}>{user.phone}</span>
    </div>
  )
}

export default UserCard
