import React from 'react'
import { User } from '../../types/types'
import Image from 'next/image'
import { PLACEHOLDER_URL } from '@/shared/constants'
import avatarPlaceholder from '../../../../../public/assets/photo-cover.png'

type Props = {
  user: User
}

const UserDetails = ({ user }: Props) => {
  return (
    <div>
      <Image
        src={
          user.photo === (PLACEHOLDER_URL || !user.photo)
            ? avatarPlaceholder
            : user.photo
        }
        width={70}
        height={70}
        alt="user-avatar"
      />
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Position:</strong> {user.position}
      </p>
    </div>
  )
}

export default UserDetails
