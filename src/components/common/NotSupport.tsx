export const NotSupport: Component<{
  text?: string
}> = ({ text }) => {
  return (
    <div className="flex h-[100px] items-center justify-center text-lg font-medium">
      {text || '您目前所在的区域暂不支援此功能'}
    </div>
  )
}
