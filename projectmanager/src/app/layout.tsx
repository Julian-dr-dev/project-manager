import Sidenav from '@/components/Sidenav/Sidenav';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import { NextAuthProvider } from '@/components/NextAuthProvider/NextAuthProvider';



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
        
        <NextAuthProvider>
          <main className='ml-64 py-20 px-6'>
            <Sidenav />
            <Header />
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  )
}
