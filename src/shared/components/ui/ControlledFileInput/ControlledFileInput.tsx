import React, { ComponentPropsWithoutRef, useRef } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import s from './ControlledFileInput.module.css'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  placeholder?: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

const ControlledFileInput = <T extends FieldValues>({
  control,
  name,
  placeholder = 'Upload your photo',
  ...rest
}: Props<T>) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const {
    field: { onChange, value, ref, ...field },
    fieldState: { error },
  } = useController({ control, name })

  const handleClick = () => {
    inputRef.current?.click()
  }

  return (
    <div className={s.inputWrapper}>
      <div className={s.wrapper}>
        <button type="button" className={s.uploadButton} onClick={handleClick}>
          Upload
        </button>

        <span className={s.placeholder}>
          {value ? (value as File).name : placeholder}
        </span>

        <input
          type="file"
          ref={(el) => {
            inputRef.current = el
            ref(el)
          }}
          className={s.hiddenInput}
          onChange={(e) => onChange(e.target.files?.[0] || null)}
          {...field}
          {...rest}
        />
      </div>
      {error && <span className="error">{error.message}</span>}
    </div>
  )
}

export default ControlledFileInput
