import type { FC } from 'react'

import { useCurrentRoomCount } from '~/atoms/hooks'
import { FloatPopover } from '~/components/ui/float-popover'

import { useMaybeInRoomContext } from '../activity'

export const CurrentReadingCountingMetaBarItem: FC<{
  leftElement?: React.ReactNode
}> = ({ leftElement }) => {
  const roomCtx = useMaybeInRoomContext()

  const count = useCurrentRoomCount(roomCtx?.roomName || '')

  if (!roomCtx || count <= 1) return null

  return (
    <>
      {leftElement}
      <FloatPopover
        asChild
        mobileAsSheet
        type="tooltip"
        triggerElement={
          <span>
            當前<span className="mx-1 font-medium">{count}</span>人正在閱讀
          </span>
        }
      >
        當前的即時閱讀人數，可以通過左側時間線查看其他人的閱讀進度（手機上無法查看）
      </FloatPopover>
    </>
  )
}
