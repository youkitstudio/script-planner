import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-noto-sans-kr',
})

export const metadata: Metadata = {
  title: '재난영화로 알아보는 직업이야기 - 나레이션 원고 작성',
  description: '교육 영상 제작을 위한 나레이션 원고 작성 및 러닝타임 체크 도구',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
