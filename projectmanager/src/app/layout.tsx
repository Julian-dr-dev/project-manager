import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Project manager',
  description: 'Manage your project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='ml-64 py-20 px-6'>{children}</main>
      </body>
    </html>
  )
}
