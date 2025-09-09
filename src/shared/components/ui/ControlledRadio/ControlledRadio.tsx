import { createUserSchemaType } from '@/features/create-user-form/lib/zod/create-user.schema'
import { Controller, Control } from 'react-hook-form'
import s from './ControlledRadio.module.css'

type Props = {
  control: Control<createUserSchemaType>
  value: number
  label: string
}

const ControlledRadio = ({ control, value, label }: Props) => {
  return (
    <Controller
      control={control}
      name="position_id"
      render={({ field }) => (
        <label className={s.label}>
          <input
            type="radio"
            value={value}
            checked={field.value === value}
            onChange={() => field.onChange(value)}
          />
          {label}
        </label>
      )}
    />
  )
}

export default ControlledRadio
