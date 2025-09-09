import React from 'react'
import s from './PositionRadioGroup.module.css'
import { usePosition } from '../../hooks/usePosition'
import { Control, FieldErrors } from 'react-hook-form'
import { createUserSchemaType } from '../../lib/zod/create-user.schema'
import ControlledRadio from '@/shared/components/ui/ControlledRadio/ControlledRadio'

type Props = {
  control: Control<createUserSchemaType>
  error: FieldErrors<createUserSchemaType>
}

const PositionRadioGroup = ({ control, error }: Props) => {
  const { data: positions } = usePosition()

  return (
    <div className={s.wrapper}>
      <span className={s.label}>Select your position</span>
      <div className={s.options}>
        {positions?.positions.map((position) => (
          <ControlledRadio
            key={position.id}
            control={control}
            value={position.id}
            label={position.name}
          />
        ))}
        {error.position_id && (
          <span className="error">{error.position_id?.message}</span>
        )}
      </div>
    </div>
  )
}

export default PositionRadioGroup
