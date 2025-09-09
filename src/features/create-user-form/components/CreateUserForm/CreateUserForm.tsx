'use client'
import React from 'react'
import s from './CreateUserForm.module.css'
import ControlledInput from '@/shared/components/ui/ControlledInput/ControlledInput'
import { useForm } from 'react-hook-form'
import {
  createUserSchema,
  createUserSchemaType,
} from '../../lib/zod/create-user.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/shared/components/ui/Button/Button'
import PositionRadioGroup from '../PositionRadioGroup/PositionRadioGroup'
import ControlledFileInput from '@/shared/components/ui/ControlledFileInput/ControlledFileInput'
import { useRouter } from 'next/navigation'
import { createUser } from '@/app/actions/createUser'

const CreateUserForm = () => {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserSchemaType>({
    defaultValues: {
      name: '',
      email: '',
      phone: '+380',
      position_id: 0,
    },
    resolver: zodResolver(createUserSchema),
  })

  const onSubmit = async (data: createUserSchemaType) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('phone', data.phone)
    formData.append('position_id', String(data.position_id))
    if (data.photo instanceof File) {
      formData.append('photo', data.photo)
    }
    try {
      const res = await createUser(formData)
      if (res.success) {
        router.push('/success')
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw error
    }
  }
  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          name="name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
          id="user-name"
          aria-describedby="name-error"
          aria-invalid={!!errors.name?.message}
        />
        <ControlledInput
          control={control}
          name="email"
          placeholder="Email"
          type="email"
          autoComplete="email"
          id="user-email"
          aria-describedby="email-error"
          aria-invalid={!!errors.email?.message}
        />{' '}
        <ControlledInput
          control={control}
          name="phone"
          placeholder="Phone"
          type="tel"
          autoComplete="tel"
          id="user-phone"
          aria-describedby="phone-error"
          aria-invalid={!!errors.phone?.message}
        />
        <PositionRadioGroup control={control} error={errors} />
        <ControlledFileInput
          control={control}
          name="photo"
          placeholder="Upload your photo"
          autoComplete="file"
          id="user-photo"
          aria-describedby="photo-error"
          aria-invalid={!!errors.photo?.message}
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  )
}

export default CreateUserForm
