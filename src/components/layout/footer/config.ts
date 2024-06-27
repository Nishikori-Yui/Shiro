export const defaultLinkSections: LinkSection[] = [
  {
    name: '關於',
    links: [
      {
        name: '關於本站',
        href: '/about-site',
      },
      {
        name: '關於我',
        href: '/about-me',
      },
      {
        name: '關於此項目',
        href: 'https://github.com/innei/Shiro',
        external: true,
      },
    ],
  },
  {
    name: '更多',
    links: [
      {
        name: '時間線',
        href: '/timeline',
      },
      {
        name: '友連',
        href: '/friends',
      },
      {
        name: '監控',
        href: 'https://status.shizuri.net/status/main',
        external: true,
      },
    ],
  },
  {
    name: '聯繫',
    links: [
      {
        name: '寫留言',
        href: '/message',
      },
      {
        name: '發郵件',
        href: 'mailto:i@ursprung.io',
        external: true,
      },
    ],
  },
]

export interface FooterConfig {
  linkSections: LinkSection[]
  otherInfo: OtherInfo
}
