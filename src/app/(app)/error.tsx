'use client'

import { useEffect } from 'react'

// import { captureException } from '@sentry/nextjs'

import { NormalContainer } from '~/components/layout/container/Normal'
import { StyledButton } from '~/components/ui/button'

// eslint-disable-next-line react/display-name
export default ({ error, reset }: any) => {
  useEffect(() => {
    console.error('error', error)
    // captureException(error)
  }, [error])

  return (
    <NormalContainer>
      <div className="flex min-h-[calc(100vh-10rem)] flex-col center">
        <h2 className="mb-5 text-center">
          <p>渲染頁面時發生了錯誤</p>
          <p>
            多次出現錯誤請聯繫開發者 <a href="mailto:i@ursprung.io">錦織 唯</a>
            ，謝謝！
          </p>
        </h2>
        <StyledButton variant="primary" onClick={() => location.reload()}>
          刷新
        </StyledButton>
      </div>
    </NormalContainer>
  )
}
