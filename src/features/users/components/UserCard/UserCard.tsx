'use client'
import React from 'react'
import s from './UserCard.module.css'
import { User } from '../../types/types'
import Image from 'next/image'
import clsx from 'clsx'
import avatarPlaceholder from '../../../../../public/assets/photo-cover.png'
import { PLACEHOLDER_URL } from '@/shared/constants'
import Tooltip from '@/shared/components/ui/Tooltip/Tooltip'

type Props = {
  user: User
  onClick: () => void
}

const UserCard = ({ user, onClick }: Props) => {
  return (
    <div
      className={s.card}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      role="button"
      aria-label="Open user information"
    >
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
      <Tooltip title={user.name}>
        <span className={clsx(s.name, s.ellipsis)}>{user.name}</span>
      </Tooltip>
      <Tooltip title={user.email}>
        <span className={s.ellipsis}>{user.email}</span>
      </Tooltip>

      <span className={s.ellipsis}>{user.position}</span>
      <span className={s.ellipsis}>{user.phone}</span>
    </div>
  )
}

export default UserCard
