import React, { ReactNode } from 'react'
import * as RTooltip from '@radix-ui/react-tooltip'
import s from './Tooltip.module.css'

type Props = {
  children: ReactNode
}

const Tooltip = ({ children }: Props) => {
  return (
    <RTooltip.Provider>
      <RTooltip.Root>
        <RTooltip.Trigger asChild>
          <button className={s.iconButton}>.</button>
        </RTooltip.Trigger>
        <RTooltip.Portal>
          <RTooltip.Content className={s.content} sideOffset={5}>
            {children}
            <RTooltip.Arrow className={s.arrow} />
          </RTooltip.Content>
        </RTooltip.Portal>
      </RTooltip.Root>
    </RTooltip.Provider>
  )
}

export default Tooltip
