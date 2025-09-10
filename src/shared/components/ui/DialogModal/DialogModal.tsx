import React, { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import s from './DialogModal.module.css'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: ReactNode
}

const DialogModal = ({ open, onOpenChange, title, description }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.content}>
          <Dialog.Title className={s.title}>{title}</Dialog.Title>
          <Dialog.Description className={s.description}>
            {description}
          </Dialog.Description>

          <Dialog.Close asChild>
            <button
              className={s.iconButton}
              aria-label="Close"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onOpenChange(false)
                }
              }}
            >
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogModal
