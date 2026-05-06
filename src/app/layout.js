import './globals.css'

export const metadata = {
  title: '발게(Valge) | 글로벌 테크 커머스 스타트업',
  description: '발게는 컴퓨터 주변기기, 스마트 데스크 제품, 로봇 액세서리를 글로벌 시장에 연결하는 크로스보더 커머스 스타트업입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
