'use client'

import { useState } from 'react'

import { StyledButton } from '~/components/ui/button'
import { Input } from '~/components/ui/input/Input'

export const NotePasswordForm = () => {
  const [password, setPassword] = useState('')
  const handleSubmit: React.EventHandler<React.MouseEvent> = (e) => {
    e.preventDefault()
    window.location.href = `${window.location.href}?password=${password}`
  }
  return (
    <div className="flex h-[calc(100vh-15rem)] flex-col space-y-4 center">
      需要密碼才能查看！
      <form className="mt-8 flex flex-col space-y-4 center">
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="輸入密碼以查看"
          aria-label="輸入密碼以查看"
        />
        <StyledButton
          disabled={!password}
          type="submit"
          variant="primary"
          onClick={handleSubmit}
        >
          讓我看看！
        </StyledButton>
      </form>
    </div>
  )
}
