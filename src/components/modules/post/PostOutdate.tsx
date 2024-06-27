'use client'

import dayjs from 'dayjs'

import { Banner } from '~/components/ui/banner'
import { RelativeTime } from '~/components/ui/relative-time'
import { useCurrentPostDataSelector } from '~/providers/post/CurrentPostDataProvider'

export const PostOutdate = () => {
  const time = useCurrentPostDataSelector((s) => s?.modified)
  if (!time) {
    return null
  }
  return dayjs().diff(dayjs(time), 'day') > 60 ? (
    <Banner type="warning" className="my-10">
      <span className="leading-[1.8]">
        這篇文章上次修改於 <RelativeTime date={time} />
        ，可能部分內容已經不適用，如有疑問可詢問作者。
      </span>
    </Banner>
  ) : null
}
