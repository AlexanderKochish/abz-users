import React, { ComponentPropsWithoutRef } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import s from './ControlledInput.module.css'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
} & ComponentPropsWithoutRef<'input'>

const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name })
  return (
    <div className={s.wrapper}>
      <input className={s.input} {...field} {...rest} />
      {error && <span className="error">{error.message}</span>}
    </div>
  )
}

export default ControlledInput
